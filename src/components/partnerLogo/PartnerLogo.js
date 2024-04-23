import React from 'react'

const PartnerLogo = () => {
  return (
    <section>
        <div className='max-w-container mx-auto py-28'>
            <div className='flex justify-center flex-wrap md:justify-between'>
                <div className=''>
                    <picture>
                        <img src="images/logo1.png" alt="partnerLogo" />
                    </picture>
                </div>
                <div>
                    <picture>
                        <img src="images/logo2.png" alt="partnerLogo" />
                    </picture>
                </div>
                <div>
                    <picture>
                        <img src="images/logo3.png" alt="partnerLogo" />
                    </picture>
                </div>
                <div>
                    <picture>
                        <img src="images/logo4.png" alt="partnerLogo" />
                    </picture>
                </div>
            </div>
        </div>
    </section>
  )
}

export default PartnerLogo;