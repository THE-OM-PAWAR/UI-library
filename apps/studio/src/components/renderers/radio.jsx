export function renderRadio({ RadioGroup, RadioGroupItem }, customClassName) {
    return (
        <RadioGroup defaultValue="option1" className={customClassName}>
            <label htmlFor="r1" className="flex items-center gap-2">
                <RadioGroupItem value="option1" id="r1" />
                <span>Option 1</span>
            </label>
            <label htmlFor="r2" className="flex items-center gap-2">
                <RadioGroupItem value="option2" id="r2" />
                <span>Option 2</span>
            </label>
            <label htmlFor="r3" className="flex items-center gap-2">
                <RadioGroupItem value="option3" id="r3" />
                <span>Option 3</span>
            </label>
        </RadioGroup>
    );
}
