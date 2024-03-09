    import React from 'react'

    export const Newsletter = () => {
        return (
            <div>
    <div class="w-34 bg mx-24 my-10 flex flex-col justify-center rounded-md bg-[#4D2C5E] py-16">
        <div class="flex justify-center text-4xl font-semibold text-white">Subscribe to our newsletter</div>

        <div class="mt-3 flex justify-center text-lg font-normal text-white">Lorem Ipsum is simply dummy text of the printing.</div>

        <div class="mt-12 flex justify-center">
        <input type="text" placeholder="Email address" class="relative placeholder: flex h-20 w-[500px] justify-center rounded-full px-7 text-xl" />

        <button class=" px-10 py-2 text-3xl font-semibold text-white bg-orange-500 rounded-full">Send</button>
        </div>
    </div>
    </div>
        )
    }
