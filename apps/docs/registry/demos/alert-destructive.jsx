import {
    Alert,
    AlertAction,
    AlertDescription,
    AlertTitle,
    Button,
} from "@repo/components";
import { AlertTriangle } from "lucide-react";

export default function AlertDestructive() {
    return (
        <div className="w-full max-w-2xl">
            <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Delete failed</AlertTitle>
                <AlertDescription>
                    We couldn't delete your project due to a server error. Please
                    try again.
                </AlertDescription>
                <AlertAction>
                    <Button size="xs" variant="outline">
                        Retry
                    </Button>
                </AlertAction>
            </Alert>
        </div>
    );
}
