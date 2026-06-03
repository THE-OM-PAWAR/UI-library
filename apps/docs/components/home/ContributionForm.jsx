"use client";

// Email sending moved to a server API route to keep secrets server-side
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
    Button,
    Input,
    Label,
    Textarea,
} from "@repo/components";
import React, { useEffect, useRef, useState } from "react";
import styles from "@/css/home/ContributionForm.module.css";

const CONTRIBUTORS_API =
    "https://api.github.com/repos/THE-OM-PAWAR/UI-library/contributors";

const ContributionForm = () => {
    const formRef = useRef(null);
    const [contributors, setContributors] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [submitStatus, setSubmitStatus] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        async function loadContributors() {
            try {
                const allContributors = [];
                let page = 1;
                let hasMorePages = true;

                while (hasMorePages) {
                    const response = await fetch(
                        `${CONTRIBUTORS_API}?per_page=100&page=${page}`,
                        {
                            signal: controller.signal,
                            headers: {
                                Accept: "application/vnd.github+json",
                            },
                        }
                    );

                    if (!response.ok) {
                        throw new Error("Unable to fetch contributors");
                    }

                    const data = await response.json();
                    const contributorsPage = Array.isArray(data) ? data : [];

                    allContributors.push(...contributorsPage);
                    hasMorePages = contributorsPage.length === 100;
                    page += 1;
                }

                setContributors(allContributors);
            } catch (error) {
                if (error.name !== "AbortError") {
                    setContributors([]);
                }
            } finally {
                if (!controller.signal.aborted) {
                    setIsLoading(false);
                }
            }
        }

        loadContributors();

        return () => controller.abort();
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        setSubmitStatus("sending");
        try {
            // Send form data to a server-side API route — keep EmailJS secrets out of the client
            const form = new FormData(formRef.current);
            const template_params = Object.fromEntries(form.entries());
            const resp = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ template_params }),
            });
            if (!resp.ok) {
                await resp.text();
                setSubmitStatus("error");
                return;
            }
            setSubmitStatus("success");
            e.target.reset();
        } catch {
            setSubmitStatus("error");
        }
    }

    return (
        <div className={styles.wraper}>
            <section className={styles.section}>
                <form
                    ref={formRef}
                    className={styles.form}
                    onSubmit={handleSubmit}
                >
                    <h2 className={styles.heading}>Wanna Contribute ??</h2>
                    <div className={styles.row}>
                        <div className={styles.field}>
                            <Label htmlFor="contrib-name">Name</Label>
                            <Input
                                id="contrib-name"
                                name="from_name"
                                className={styles.glassInput}
                                placeholder="Your name"
                            />
                        </div>
                        <div className={styles.field}>
                            <Label htmlFor="contrib-email">Email ID</Label>
                            <Input
                                id="contrib-email"
                                name="from_email"
                                className={styles.glassInput}
                                placeholder="you@domain.com"
                            />
                        </div>
                    </div>
                    <div className={styles.field}>
                        <Label htmlFor="contrib-phone">Phone number</Label>
                        <Input
                            id="contrib-phone"
                            name="phone"
                            className={styles.glassInput}
                            placeholder="+91 98765 43210"
                        />
                    </div>
                    <div className={styles.field}>
                        <Label htmlFor="contrib-notes">
                            What can you contribute
                        </Label>
                        <Textarea
                            id="contrib-notes"
                            name="message"
                            className={`${styles.glassInput} ${styles.textarea}`}
                            placeholder="Tell us about your idea..."
                            rows={4}
                        />
                    </div>
                    <div>
                        <Button
                            type="submit"
                            className={styles.submitButton}
                            disabled={submitStatus === "sending"}
                        >
                            {submitStatus === "sending"
                                ? "Sending..."
                                : "Submit contribution"}
                        </Button>
                        {submitStatus === "success" && (
                            <span className={styles.success}>
                                Thanks! We received your message.
                            </span>
                        )}
                        {submitStatus === "error" && (
                            <span className={styles.error}>
                                Failed to send. Try again later.
                            </span>
                        )}
                    </div>
                </form>
                <div className={styles.contributors}>
                    <p>OUR Contributors</p>
                    <div className={styles.contributorList}>
                        {isLoading
                            ? Array.from({ length: 5 }).map((_, index) => (
                                  <span
                                      aria-hidden="true"
                                      className={styles.avatarSkeleton}
                                      key={index}
                                  />
                              ))
                            : contributors.map((contributor) => (
                                  <a
                                      href={contributor.html_url}
                                      key={contributor.id}
                                      rel="noreferrer"
                                      target="_blank"
                                      data-name={contributor.login}
                                      title={contributor.login}
                                  >
                                      <Avatar
                                          size="lg"
                                          className={styles.contributorAvatar}
                                      >
                                          <AvatarImage
                                              alt={contributor.login}
                                              src={contributor.avatar_url}
                                          />
                                          <AvatarFallback>
                                              {contributor.login
                                                  .slice(0, 2)
                                                  .toUpperCase()}
                                          </AvatarFallback>
                                      </Avatar>
                                  </a>
                              ))}
                        {!isLoading && contributors.length === 0 ? (
                            <span className={styles.contributorEmpty}>
                                Contributors could not be loaded right now.
                            </span>
                        ) : null}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContributionForm;
