import { Button } from "@repo/components";
import { ArrowRight, Mail } from "lucide-react";

export default function ButtonWithIcon() {
    return (
        <div className="flex flex-wrap items-center gap-4">
            <Button>
                <Mail className="mr-2 h-4 w-4" />
                Login with Email
            </Button>
            <Button variant="outline">
                Continue
                <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
        </div>
    );
}
