import React, { useState } from 'react';
import { ReactComponent as StarIcon } from './images/icon-star.svg';
import { ReactComponent as ThanksImg } from './images/illustration-thank-you.svg';

const RatingComponent: React.FC = () => {
    const [rating, setRating] = useState<number | null>(0);
    const [submitted, setSubmitted] = useState<boolean>(false);

    return (
        <main className='flex justify-center items-center bg-very-dark-blue text-white min-h-screen'>
            {!submitted ? (<section className='space-y-3 max-w-full sm:max-w-sm bg-dark-blue p-5 rounded-lg m-3 '>
                <header className='flex justify-center items-center bg-light-dark-blue rounded-full w-8 h-8'>
                    <StarIcon />
                </header>

                <h1 className='text-lg'>How did we do?</h1>

                <p className='text-xs text-light-grey '>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>

                <div className='flex justify-between'>
                    {[1, 2, 3, 4, 5].map(num => (
                        <button className={`bg-light-dark-blue rounded-full w-8 h-8 text-center text-light-grey text-xs mb-3  ${rating === num ? 'bg-orange text-white' : 'bg-light-dark-blue'}`}
                            key={num}
                            onClick={() => setRating(num)}
                        >
                            {num}
                        </button>
                    ))}
                </div>

                <button className='bg-orange w-full rounded-full py-2  uppercase tracking-widest text-xs cursor-pointer'
                    onClick={() => { setSubmitted(true) }}
                >submit</button>
            </section>) : (

                <section className='flex flex-col justify-start items-center space-y-3 max-w-full sm:max-w-sm bg-dark-blue p-5 rounded-lg m-3 '>

                    <ThanksImg />
                    <span className='text-orange text-xs text-opacity-80 bg-light-dark-blue p-2 rounded-full bg-opacity-40'>You selected {rating} out of 5</span>

                    <h1 className='text-xl font-semibold'>Thank you!</h1>

                    <p className='text-xs text-light-grey text-center'>We appreciate you taking the time to give a rating. If you ever need more support,don’t hesitate to get in touch!</p>

                </section>)}

        </main>
    )
}

export default RatingComponent