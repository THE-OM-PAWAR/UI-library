"use client";

import React, { useEffect, useState } from "react";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
    Button,
    Input,
    Label,
    Textarea,
} from "@repo/components";
import styles from "@/css/home/ContributionForm.module.css";

const CONTRIBUTORS_API =
    "https://api.github.com/repos/THE-OM-PAWAR/UI-library/contributors";

const ContributionForm = () => {
    const [contributors, setContributors] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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

    return (
        <div className={styles.wraper}>
            <section className={styles.section}>
                <form className={styles.form}>
                    <h2 className={styles.heading}>Wanna Contribute ??</h2>
                    <div className={styles.row}>
                        <div className={styles.field}>
                            <Label htmlFor="contrib-name">Name</Label>
                            <Input
                                id="contrib-name"
                                className={styles.glassInput}
                                placeholder="Your name"
                            />
                        </div>
                        <div className={styles.field}>
                            <Label htmlFor="contrib-email">Email ID</Label>
                            <Input
                                id="contrib-email"
                                className={styles.glassInput}
                                placeholder="you@domain.com"
                            />
                        </div>
                    </div>
                    <div className={styles.field}>
                        <Label htmlFor="contrib-phone">Phone number</Label>
                        <Input
                            id="contrib-phone"
                            className={styles.glassInput}
                            placeholder="+91 98765 43210"
                        />
                    </div>
                    <div className={styles.field}>
                        <Label htmlFor="contrib-notes">What can you contribute</Label>
                        <Textarea
                            id="contrib-notes"
                            className={`${styles.glassInput} ${styles.textarea}`}
                            placeholder="Tell us about your idea..."
                            rows={4}
                        />
                    </div>
                    <Button type="submit" className={styles.submitButton}>
                        Submit contribution
                    </Button>
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
                                    <Avatar size="lg" className={styles.contributorAvatar}>
                                        <AvatarImage
                                            alt={contributor.login}
                                            src={contributor.avatar_url}
                                        />
                                        <AvatarFallback>
                                            {contributor.login.slice(0, 2).toUpperCase()}
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
