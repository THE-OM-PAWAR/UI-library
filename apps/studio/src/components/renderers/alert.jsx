export function renderAlert(
    { Alert, AlertTitle, AlertDescription },
    customClassName
) {
    return (
        <div className="space-y-4 max-w-2xl">
            <Alert variant="default">
                <AlertTitle>Default Alert</AlertTitle>
                <AlertDescription>
                    This is a default alert with some information.
                </AlertDescription>
            </Alert>

            <Alert variant="destructive">
                <AlertTitle>Destructive Alert</AlertTitle>
                <AlertDescription>
                    This is a destructive alert indicating an error or warning.
                </AlertDescription>
            </Alert>
        </div>
    );
}
