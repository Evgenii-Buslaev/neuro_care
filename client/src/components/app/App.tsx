import { FC, useEffect, useState } from 'react'
import css from './App.module.scss'
import { Outlet, Link } from 'react-router-dom'

export const App: FC = () => {
    const [counter, setCounter] = useState<number>(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prev => prev + 1)
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])
    return <>
        <Link to='/about'>about</Link>
        <Link to='/profile'>profile</Link>
        <div className='px-2 py-3 font-bold font-black opacity-50 text-yellow-300'>{counter}</div>
        <div className={css.button}>{counter}</div>
        <Outlet />
    </>
}