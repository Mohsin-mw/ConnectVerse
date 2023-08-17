/**
 * This is the component for the ActiveNow section.
 * It displays a list of friends who are online
 * 
 * TODO: pull in friends list dynamically and display the ones who are online
 */

const ActiveNow = () => {
    return (
        <div className="w-96 border-l border-arsenic px-5 py-4">
            <h2 className="text-sonic-silver text-xl">Active Now</h2>

            <div className="mt-8">
                <p className="text-sonic-silver text-base">It's quiet for now...</p>
            </div>
        </div>
    );
}

export default ActiveNow;