import React from 'react'
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";

function searching() {

    // Auth
    const address = useAddress();
    const disconnect = useDisconnect();
    const connectWithMetamask = useMetamask();

    return (
        <div className='flex flex-col h-screen lg:grid lg:grid-cols-10'>
            {/* Left Side */}
            <div className='col-span-4 bg-gradient-to-br from-cyan-800 to-rose-500'>
                <div className='flex flex-col items-center justify-center py-2 lg:min-h-screen'>
                    <div className='bg-gradient-to-br from-yellow-400 to-purple-600 p-2 rounded-xl'>
                        <img
                            className='w-44 rounded-xl object-cover lg:h-96 lg:w-72'
                            src="https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?format=png&width=960" alt="" />
                    </div>
                    <div className='space-y-2 text-center p-5'>
                        <h1 className='text-4xl fond-bold text-white'>Ape Young League</h1>
                        <h2 className='text-xl text-gray-300'>We giveaway 30 whitelist spots</h2>

                        <hr />

                        <h2 className='text-xl text-gray-300'>A non-fungible token is a financial security consisting of digital data stored in a blockchain, a form of distributed ledger. The ownership of an NFT is recorded in the blockchain, and can be transferred by the owner, allowing NFTs to be sold and traded.</h2>
                    </div>
                </div>
            </div>

            {/* Right Side */}
            <div className='flex flex-col flex-1 lg:col-span-6 p-12'>

                {/* Header */}
                <header className='items-center justify-between flex'>
                    <h1 className='w-52 cursor-pointer font-extralight text-xl sm:w-80'>THE {' '}
                        <span className='font-extrabold underline decoration-pink-600/50'>PLUTO</span>
                        {' '} NFT MARKET PLACE </h1>

                    <button
                        onClick={() => (address ? disconnect() : connectWithMetamask())}
                        className='rounded-full bg-rose-400 px-4 py-2 text-sm font-bold text-white lg:px-5 lg:py-3 lg:text-base'>{address ? 'Sign Out' : 'Sign In'}</button>
                </header>

                <hr className='border my-2' />
                {address && (
                    <p className="text-center text-sm text-rose-400">
                        You`re logged in with wallet {address.substring(0, 5)}...
                        {address.substring(address.length - 5)}
                    </p>
                )}

                {/* Content */}
                <div className='mt-10 flex flex-1 flex-col items-center text-center space-y-6 lg:space-y-0 lg:justify-center'>
                    <img
                        className='w-80 object-cover pb-10 lg:h-40'
                        src="https://cdn.sanity.io/images/bapseckt/production/63e1f1f1ea0bdd8b8a8ccd992e27cbe72a1e2fd6-2951x2430.webp" alt="" />
                    <h1
                        className='font-bold text-3xl lg:text-5xl lg:font-extrabold'>Discover and collect extraordinary NFTs</h1>
                    <p className='text-xl pt-2 text-green-500'>13/21 NFT's Claimed</p>
                </div>

                {/* Mint Button */}
                <button className='text-white bg-red-500 h-16 w-full rounded-full mt-10 font-bold'>
                    Mint NFT (0.001 ETH)
                </button>

            </div>
        </div>
    )
}

export default searching