import { CloseButton } from "./CloseButton";

const feedbackTypes = {
    BUG: {
        title: "Problema",
    },
    IDEA: {
        title: "Ideia",
    },
    OTHER: {
        title: "Outro",
    },
};

export function WidgetForm() {
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>
                <CloseButton />
            </header>
            <p>Hello World</p>
            <footer className="text-xs text-neutral-400">
                Made with ♥ by{" "}
                <a
                    className="underline underline-offset-4"
                    href="https://github.com/gabriel-durr"
                >
                    {" "}
                    Gabriel Dürr{" "}
                </a>
            </footer>
        </div>
    );
}
