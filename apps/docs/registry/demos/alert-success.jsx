import { Alert, AlertDescription, AlertTitle } from "@repo/components";
import { CheckCircle2 } from "lucide-react";

export default function AlertSuccess() {
    return (
        <div className="w-full max-w-2xl">
            <Alert variant="success">
                <CheckCircle2 className="h-4 w-4" />
                <AlertTitle>Changes saved</AlertTitle>
                <AlertDescription>
                    Your profile has been updated successfully.
                </AlertDescription>
            </Alert>
        </div>
    );
}
