import React from "react";

const ProgressBar = ({ progress }: { progress: number }) => {
    return (
        <div className="bg-gray-400 w-full h-4 mt-3 rounded-full">
            <div className="bg-primary rounded-full h-4 text-[10px] font-semibold" style={{ width: `${progress}%` }}>
                {Number(progress).toFixed(0)}%
            </div>
        </div>
    );
};

export default ProgressBar;
