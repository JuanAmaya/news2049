export default function ErrorMessage({ errorMessage }) {
    return (
        <div className="bg-red-900 mt-16 mx-6 xl:mx-0">
            <h2 className="text-red-500 text-2xl px-4 pt-4 xl:px-8">ERROR</h2>
            <p className="text-white text-lg px-4 pb-4 xl:px-8">{errorMessage}</p>
            <button onClick={() => window.location.reload()} className="text-white bg-red-600 w-full text-xl p-2 hover:bg-red-700 transition-colors">RELOAD</button>
        </div>
    );
}