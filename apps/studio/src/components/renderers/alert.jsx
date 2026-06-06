import { Info, CheckCircle2, AlertTriangle, XCircle } from "lucide-react";

export function renderAlert(
    { Alert, AlertTitle, AlertDescription },
    customClassName
) {
    return (
        <div className="space-y-4 max-w-2xl">

            <Alert variant="info">
                <Info className="h-4 w-4" />
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                    This is a default alert for general updates and contextual information.
                </AlertDescription>
            </Alert>

            <Alert variant="success">
                <CheckCircle2 className="h-4 w-4" />
                <AlertTitle>Changes saved</AlertTitle>
                <AlertDescription>
                    Your profile has been updated successfully.
                </AlertDescription>
            </Alert>

            <Alert variant="warning">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Heads up</AlertTitle>
                <AlertDescription>
                    Your session will expire in 5 minutes. Please save your work.
                </AlertDescription>
            </Alert>

            <Alert variant="error">
                <XCircle className="h-4 w-4" />
                <AlertTitle>Something went wrong</AlertTitle>
                <AlertDescription>
                    We couldn't complete that action. Please try again.
                </AlertDescription>
            </Alert>

        </div>
    );
}