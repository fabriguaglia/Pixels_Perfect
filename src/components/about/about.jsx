import React from 'react';
import spritesImport from '../../assets/sprites/spritesImports';
import './about.css';
import { PeopleCard } from './people';

function AboutUs() {
    return (
        <>
            <div className='ourteam'>
                <p><span className='teamtitle'>Our Amazing Team</span>
                Meet our talented group of developers creating an innovative eCommerce platform for digital products. Our vision is to revolutionize online shopping by providing a seamless marketplace where customers can discover, purchase, and access a wide range of digital goods. We aim to empower creators, enrich lives, and inspire creativity in a future full of endless possibilities.</p>
                
                <img src={ spritesImport.ourTeam } alt='Pixels Perfect Team' className='teamimg'></img>
            </div>

            <div className='anartist'>
                <img src={ spritesImport.artistPhoto } alt="Artist of Pixel's Perfect" className='artistimg'></img>

                <p><span className='artistitle'>OUR ARTIST</span>
                    At Pixel's Perfect, our philosophy is simple yet impactful: we view our artists as our creative "clients." We believe in providing every individual with the freedom to upload, explore, and acquire unique creations. In doing so, we create a space where expression finds its home, and where each person can contribute and thrive, forming a vibrant community full of artistic diversity.</p>
            </div>

            <div className='peoplecard'>
                <PeopleCard
                    image= { spritesImport.FotoFacu }
                    name='Facundo Padilla'
                    age='28y old'
                    role='Full-Stack Developer'
                    href="https://www.linkedin.com/in/facundo-león-padilla/"
                />

                <PeopleCard
                    image= { spritesImport.FotoFabri }
                    name='Fabrizio Guaglianone'
                    age='16y old'
                    role='Full-Stack Developer'
                    href="https://www.linkedin.com/in/fabrizio-donato-guaglianone/"
                />

                {/* <PeopleCard
                    image= { spritesImport.lucioProfile }
                    name='Lucio Lopez'
                    age='16y old'
                    role='Frontend Developer'
                    href="https://github.com/ninjusdev"
                /> */}

                <PeopleCard
                    image= { spritesImport.FotoAgus }
                    name='Agustin Díaz Ortiz'
                    age='19y old'
                    role='Full-Stack Developer'
                    href="https://www.linkedin.com/in/agust%C3%ADn-ortiz-52b362291/"
                />
            </div>
        </>
    )
}

export default AboutUs;