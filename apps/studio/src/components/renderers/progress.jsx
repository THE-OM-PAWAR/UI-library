import { useEffect, useState } from "react";

function ProgressDemo({ Progress, Separator }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => setProgress(50), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col gap-4 min-w-96">
            <h4 className="font-medium">Default Progress</h4>
            <Progress value={progress} />

            <Separator />

            <h4 className="font-medium">Custom Progress Color</h4>
            <Progress value={progress} color="#F1A839" speed={300} />

            <Separator />

            <h4 className="font-medium">Custom Progress Height</h4>
            <Progress value={progress} height={20} />
        </div>
    );
}

export function renderProgress(components) {
    return <ProgressDemo {...components} />;
}
