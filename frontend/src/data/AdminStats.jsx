import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStats } from "../redux/Action.js";
import Loadingdata from "../components/Loadingdata.jsx";

const AdminStats = (props) => {
    useEffect(() => {
        props.loader();
    }, []);

    const stats = props.data.datalist || {};

    return (
        <>
            <div className="bg-indigo-600 px-8 pt-10 lg:pt-14 pb-16 flex justify-between items-center mb-3">
                <h1 className="text-xl px-36 text-white">Welcome</h1>
            </div>

            {Object.keys(stats).length === 0 ? (
                <Loadingdata />
            ) : (
                <div className="grid -mt-12 mx-6 mb-6  px-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
                    <div className="bg-white dark:bg-slate-800 shadow rounded-md w-full relative">
                        <div className="flex-auto p-4 text-center">
                            <h4 className="my-1 font-semibold text-2xl dark:text-slate-200">{stats['clientcount']}</h4>
                            <h6 className="text-gray-400 mb-0 font-medium uppercase">Total Clients</h6>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 shadow rounded-md w-full relative">
                        <div className="flex-auto p-4 text-center">
                            <h4 className="my-1 font-semibold text-2xl dark:text-slate-200">{stats['drriadcount']}</h4>
                            <h6 className="text-gray-400 mb-0 font-medium uppercase">Total Dr Riad</h6>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 shadow rounded-md w-full relative">
                        <div className="flex-auto p-4 text-center">
                            <h4 className="my-1 font-semibold text-2xl dark:text-slate-200">{stats['riadcount']}</h4>
                            <h6 className="text-gray-400 mb-0 font-medium uppercase">Total Riads</h6>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 shadow rounded-md w-full relative">
                        <div className="flex-auto p-4 text-center">
                            <h4 className="my-1 font-semibold text-2xl dark:text-slate-200">{stats['categoriecount']}</h4>
                            <h6 className="text-gray-400 mb-0 font-medium uppercase">Total Categories</h6>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        data: state.data,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loader: () => dispatch(fetchStats()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminStats);
