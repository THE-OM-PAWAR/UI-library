import { Alert, AlertDescription, AlertTitle } from "@repo/components";
import { Info } from "lucide-react";

export default function AlertDemo() {
    return (
        <div className="w-full max-w-2xl">
            <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                    This is a default alert for general updates and contextual
                    information.
                </AlertDescription>
            </Alert>
        </div>
    );
}
