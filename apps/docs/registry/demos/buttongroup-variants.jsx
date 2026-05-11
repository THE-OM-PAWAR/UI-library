import { Button, ButtonGroup } from "@repo/components";
import { Plus } from "lucide-react";

const variants = ["default", "outline", "secondary", "ghost", "destructive"];

export default function ButtonGroupVariants() {
    return (
        <div className="flex flex-col gap-6">
            {variants.map((variant) => (
                <div key={variant} className="flex flex-col gap-2">
                    <p className="text-sm font-medium capitalize text-muted-foreground">
                        {variant}
                    </p>
                    <ButtonGroup>
                        <Button variant={variant}>Save</Button>
                        <Button variant={variant}>Cancel</Button>
                        <Button variant={variant} size="icon">
                            <Plus />
                        </Button>
                    </ButtonGroup>
                </div>
            ))}
        </div>
    );
}
