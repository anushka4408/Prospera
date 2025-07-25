import {further_group} from "../utils/tools.js";

export const BudgetView = ({grouped}) => {
    // Check if grouped data exists
    if (!grouped || grouped.length === 0) {
        return (
            <div className="flex items-center justify-center w-full h-full text-gray-500">
                Loading budget data...
            </div>
        );
    }

    const spend = further_group(grouped);
    const sum = grouped.reduce((sum, val) => sum + val.totalSum, 0);

    return (
        <div className="w-full h-full grid grid-rows-4">
            <div className="w-full flex items-center h-full ">
                <div className="w-1/12"></div>
                <div className="w-11/12 h-1/2 rounded-xl flex justify-end bg-red-500 bg-opacity-20">
                    <div style={{width: (Math.round(sum)/900 * 100) + "%"}} className="w-3/4 h-full flex rounded-xl items-center transition-al pl-4 text-xl bg-opacity-60  bg-rose-400">
                        Net Spend: ${sum?.toFixed(0)}
                    </div>
                </div>
            </div>
            <div className="w-full h-full flex items-center">
                <div className="w-1/12 "></div>
                <div className="w-11/12 h-1/2 flex rounded-xl justify-end bg-lime-200">
                    <div style={{width: (spend["Food"]/400 * 100) + "%"}} className={`w-11/12  flex rounded-xl items-center transition-al pl-4 text-xl bg-opacity-60 h-full bg-lime-300`}>
                        Food and Groceries: ${spend["Food"]?.toFixed(0)}
                    </div>
                </div>
            </div>
            <div className="w-full h-full flex items-center">
                <div className="w-1/12 "></div>
                <div className="w-11/12 h-1/2 flex rounded-xl justify-end bg-blue-200">
                    <div style={{width: (spend["Utility"]/300 * 100) + "%"}} className="w-6/12 h-full flex rounded-xl items-center transition-al pl-4 text-xl bg-opacity-60 bg-blue-300">
                        Utilities: ${spend["Utility"]?.toFixed(0)}
                    </div>
                </div>
            </div>
            <div className="w-full h-full flex items-center">
                <div className="w-1/12 "></div>
                <div className="w-11/12 h-1/2 flex rounded-xl justify-end bg-orange-200">
                    <div style={{width: (spend["Non Essentials"]/350 * 100) + "%"}} className="w-7/12 h-full flex rounded-xl items-center transition-al pl-4 text-xl bg-opacity-60  bg-orange-300">
                        Non-Essentials: ${spend["Non Essentials"]?.toFixed(0)}
                    </div>
                </div>
            </div>
        </div>
    )
}