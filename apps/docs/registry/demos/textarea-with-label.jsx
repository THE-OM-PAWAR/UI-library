import { Label, Textarea } from "@repo/components";

export default function TextareaWithLabel() {
    return (
        <div className="flex flex-col gap-1.5 w-full max-w-sm">
            <Label htmlFor="bio">Bio</Label>
            <Textarea id="bio" placeholder="Tell us about yourself…" />
        </div>
    );
}
