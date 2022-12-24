import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Home = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.error(err))
    }


    return (
        <div className="h-[800px]">
            <div className="mt-32 m-auto text-center flex flex-col max-w-md p-6 rounded-md sm:p-10">
                <p className='text-5xl font-bold font-bilbo'>async</p>
                <p className='mt-14 text-9xl font-bold font-bilbo'>tic tac</p>
                <p className='mt-14 text-9xl font-bold font-bilbo'>toe</p>
            </div>
            {
                !user?.email ?

                    <>
                        <div className='text-center'>
                            <Link to='/signin'>
                                <button type="submit" className="w-11/12 px-8 py-5 font-bold rounded-md bg-yellow-500 text-white">Login</button>
                            </Link>

                        </div>
                        <div className='text-center'>
                            <Link to='/signup'>
                                <button type="submit" className="w-11/12 mt-6 px-8 py-5 font-bold rounded-md bg-blue-500 text-white">Register</button>
                            </Link>

                        </div>
                    </>
                    :
                    <div className='text-center'>
                        <button onClick={handleLogOut} type="button" className="w-11/12 mt-6 px-8 py-5 font-bold rounded-md bg-red-500 text-white">Logout</button>
                    </div>
            }
        </div>
    );
};

export default Home;