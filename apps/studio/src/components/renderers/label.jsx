export function renderLabel({ Label, Input }, customClassName) {
    return (
        <div className={`flex flex-col gap-2 ${customClassName || ""}`}>
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Enter your email" />
            <Label htmlFor="email">Password</Label>
            <Input id="password" placeholder="Enter your password" />
        </div>
    );
}
