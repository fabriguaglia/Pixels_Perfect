import React from 'react'
import spritesImport from "../../assets/sprites/spritesImports";
import './products.css';
import OwnProducts from './products-reutilizable';

function Products() {
  return (
    <>
            <div className="prod">
            <div className="divider1"><hr></hr></div>
                <div className="box">
                    <h2>Latest Featured Pixels</h2>
                    <div className='prod-box-princ'>
                        <div className='boxxing'>
                            <a href="/products/among-sprite">
                                <OwnProducts
                                    img={ spritesImport.amongSprite }
                                    title="AMONG US SPRITE"
                                    price="$4.99"
                                    info="A pixel art of Among Us, my original creation"
                                />
                            </a>
                        </div>
                        <div className='boxxing'>
                            <a href="/products/foxSprite">
                                <OwnProducts
                                    img={ spritesImport.foxSprite }
                                    title='Fox Sprite'
                                    price='$4.99'
                                    info='A pixel art of Fox, my original creation'
                                />
                            </a>
                        </div>
                        <div className='boxxing'>
                            <a href="/products/gangster-sprite">
                                <OwnProducts
                                    img={ spritesImport.gangsterSprite }
                                    title="Gangster Sprite"
                                    price="$4.99"
                                    info="A pixel art of a Gangster, my original creation"
                                />
                            </a>
                        </div>
                        <div className='boxxing'>
                            <a href="/products/lario-sprite">
                                <OwnProducts
                                    img={ spritesImport.larioSprite }
                                    title='Lario Sprite'
                                    price='$4.99'
                                    info='A pixel art of Lario, my original creation'
                                />
                            </a>
                        </div>
                        <div className='boxxing'>
                            <a href="/products/warrior-sprite">
                                <OwnProducts
                                    img={ spritesImport.warriorSprite }
                                    title="Warrior Sprite"
                                    price="$4.99"
                                    info="A pixel art of a Woman Warrior, my original creation"
                                />
                            </a>
                        </div>
                        <div className='boxxing'>
                            <a href="/products/cientifico-sprite">
                                <OwnProducts
                                    img={ spritesImport.cientifico }
                                    title="Scientist Sprite"
                                    price="$2.99"
                                    info="A pixel art of a Scientist, my original creation"
                                />
                            </a>
                        </div>
                        <div className='boxxing'>
                            <a href="/products/policia-sprite">
                                <OwnProducts
                                    img={ spritesImport.policia }
                                    title="Police Sprite"
                                    price="$3.99"
                                    info="A pixel art of a Policeman, my original creation"
                                />
                            </a>
                        </div>
                        <div className='boxxing'>
                            <a href="/products/guardian-sprite">
                                <OwnProducts
                                    img={ spritesImport.guardian }
                                    title="Guardian Sprite"
                                    price="$3.99"
                                    info="A pixel art of a Guardian, my original creation"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='box'>
                    <h2>Fresh Pixels</h2>
                    <div className='prod-box-2'>
                        <div className='boxxing'>
                            <a href="/products/undertale-sprite">
                                <OwnProducts
                                    img={ spritesImport.undertale }
                                    title="Undertale Sprite"
                                    price="$6.99"
                                    info="A pixel art of Undertale, my original creation"
                                />
                            </a>
                        </div>
                        <div className='boxxing'>
                            <a href="/products/empresario-sprite">
                                <OwnProducts
                                    img={ spritesImport.empresario }
                                    title="Bussinesman Sprite"
                                    price="$2.99"
                                    info="A pixel art of a Bussinesman, my original creation"
                                />
                            </a>
                        </div>
                        <div className='boxxing'>
                            <a href="/products/muñeco-sprite">
                                <OwnProducts
                                    img={ spritesImport.muñeco }
                                    title="Man Sprite"
                                    price="$1.99"
                                    info="A pixel art of a Man, my original creation"
                                />
                            </a>
                        </div>
                        <div className='boxxing'>

                            <a href="/products/perro-sprite">
                                <OwnProducts
                                    img={ spritesImport.perro }
                                    title="Dog Sprite"
                                    price="$3.99"
                                    info="A pixel art of a Dog, my original creation"
                                />
                            </a>
                        </div>
                        <div className='boxxing'>

                            <a href="/products/pirata-sprite">
                                <OwnProducts
                                    img={ spritesImport.pirata }
                                    title="Pirate Sprite"
                                    price="$3.99"
                                    info="A pixel art of a Pirate, my original creation"
                                />
                            </a>
                        </div>
                        <div className='boxxing'>

                            <a href="/products/avatar-sprite">
                                <OwnProducts
                                    img={ spritesImport.avatar }
                                    title="Avatar Sprite"
                                    price="$2.99"
                                    info="A pixel art of Avatar, my original creation"
                                />
                            </a>
                        </div>
                        <div className='boxxing'>

                            <a href="/products/bearman-sprite">
                                <OwnProducts
                                    img={ spritesImport.bearMan }
                                    title="Bearman Sprite"
                                    price="$2.99"
                                    info="A pixel art of a Bear Man, my original creation"
                                />
                            </a>
                        </div>
                        <div className='boxxing'>

                            <a href="/products/quimico-sprite">
                                <OwnProducts
                                    img={ spritesImport.cientifico2 }
                                    title="Chemistry Sprite"
                                    price="$3.99"
                                    info="A pixel art of a Chemistry, my original creation"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='box'>
                    <h2>Featured jams</h2>
                    <div className='prod-box-2'>
                        <div className='boxxing'>
                            <a href="/products/mono-sprite">
                                <OwnProducts
                                    img={ spritesImport.mono }
                                    title="Mono Sprite"
                                    price="$4.99"
                                    info="A pixel art of a Mono, my original creation"
                                />
                            </a>
                        </div>
                        <div className='boxxing'>
                            <a href="/products/futbol-sprite">
                                <OwnProducts
                                    img={ spritesImport.futbol }
                                    title="Futbol Sprite"
                                    price="$4.99"
                                    info="A pixel art of a Soccer Player, my original creation"
                                />
                            </a>
                        </div>
                        <div className='boxxing'>
                            <a href="/products/tenis-sprite">
                                <OwnProducts
                                    img={ spritesImport.tenis }
                                    title="Tennis Sprite"
                                    price="$2.99"
                                    info="A pixel art of a Tennis Player, my original creation"
                                />
                            </a>
                        </div>
                        <div className='boxxing'>

                            <a href="/products/golf-sprite">
                                <OwnProducts
                                    img={ spritesImport.golf }
                                    title="Golf Sprite"
                                    price="$2.99"
                                    info="A pixel art of a Golf Player, my original creation"
                                />
                            </a>
                        </div>
                        <div className='boxxing'>

                            <a href="/products/beisbol-sprite">
                                <OwnProducts
                                    img={ spritesImport.beisbol }
                                    title="Beisbol Sprite"
                                    price="$2.99"
                                    info="A pixel art of a Beisbol Player, my original creation"
                                />
                            </a>
                        </div>
                        <div className='boxxing'>

                            <a href="/products/warrior-sprite">
                                <OwnProducts
                                    img={ spritesImport.warriorSprite }
                                    title="Warrior Sprite"
                                    price="$4.99"
                                    info="A pixel art of a Woman Warrior, my original creation"
                                />
                            </a>
                        </div>
                        <div className='boxxing'>

                            <a href="/products/guardian-sprite">
                                <OwnProducts
                                    img={ spritesImport.guardian }
                                    title="Guardian Sprite"
                                    price="$2.99"
                                    info="A pixel art of a Guardian, my original creation"
                                />
                            </a>
                        </div>
                        <div className='boxxing'>

                            <a href="/products/policia-sprite">
                                <OwnProducts
                                    img={ spritesImport.policia }
                                    title="Policeman Sprite"
                                    price="$3.99"
                                    info="A pixel art of a Police, my original creation"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Products