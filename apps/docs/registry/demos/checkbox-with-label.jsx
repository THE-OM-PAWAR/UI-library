import { Checkbox, Label } from "@shery-ui/components";

export default function CheckboxWithLabel() {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex items-start gap-2">
                <Checkbox id="terms" className="mt-0.5" />
                <div className="flex flex-col gap-0.5">
                    <Label htmlFor="terms" className="text-sm font-medium">
                        Accept terms and conditions
                    </Label>
                    <p className="text-xs text-muted-foreground">
                        You agree to our Terms of Service and Privacy Policy.
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <Checkbox id="marketing" defaultChecked />
                <Label htmlFor="marketing" className="text-sm">
                    Receive marketing emails
                </Label>
            </div>
            <div className="flex items-center gap-2">
                <Checkbox id="newsletter" />
                <Label htmlFor="newsletter" className="text-sm">
                    Subscribe to newsletter
                </Label>
            </div>
        </div>
    );
}
