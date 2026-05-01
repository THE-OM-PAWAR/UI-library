export function renderCalendar({ Calendar }) {
    const now = new Date();

    return (
        <div className="grid w-full max-w-5xl gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-4">
                <Calendar mode="single" defaultMonth={now} showOutsideDays />
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
                <Calendar mode="multiple" defaultMonth={now} selected={[now]} />
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
                <Calendar mode="range" defaultMonth={now} />
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
                <Calendar
                    mode="single"
                    defaultMonth={now}
                    buttonVariant="outline"
                    captionLayout="dropdown"
                />
            </div>
        </div>
    );
}
