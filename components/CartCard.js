import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import cartCss from '../styles/Cart.module.css'
import CartcardCss from '../styles/Cartcard.module.css'
import productcardCss from '../styles/ProductCard.module.css'
import {AiOutlineLeft} from 'react-icons/ai'
import {AiOutlineRight} from 'react-icons/ai'
const demo1 = () => {
  const slides = [1,2,3,4,5,6,7,8];

const slideRight=()=>{
  var cartslider = document.getElementById("cartslider");
  cartslider.scrollLeft = cartslider.scrollLeft+500;
}
const slideLeft=()=>{
  var cartslider = document.getElementById("cartslider");
  cartslider.scrollLeft = cartslider.scrollLeft-500;
}
const sslideRight=()=>{
  var cartslider = document.getElementById("scartslider");
  cartslider.scrollLeft = cartslider.scrollLeft+500;
}
const sslideLeft=()=>{
  var cartslider = document.getElementById("scartslider");
  cartslider.scrollLeft = cartslider.scrollLeft-500;
}
  return (
    <>

<h2 className={cartCss.Title}>  Would you like to add any of these :</h2>
    <div id='cartmain-slider-container'> 
<AiOutlineLeft className='slider-icon left' onClick={slideLeft}/>
<div id="cartslider">
{
  slides.map((slide,index)=>{
    return(
  <div className='cartslider-card' key=''>
      <div className={productcardCss.Product}>
                <Image src="/metal.png" alt="steel" className={productcardCss.cardimg}
                  width={400}
                  height={200} />
                <div className={productcardCss.bottom_right_detail}>
                  <small>
                    4.9 <i className="bi bi-star-fill"></i> (1349)
                  </small>
                </div>
              </div>
              <i className="fa-solid fa-ellipsis"></i>
              <div className={productcardCss.Product_detail}>
                <div className={productcardCss.Product_Title}>
                  <Link href="/product"><a><h3>Aluminum Scrap</h3></a></Link>
                  <p className={productcardCss.wishlist}> <i className="fa-solid fa-heart "></i></p>
                </div>
                <div className={productcardCss.Product_Description}>
                  <small>Recycled Aluminium scrap from blast furnace.</small>
                </div>
                <ul className={`${productcardCss.Product_Quantity} ${productcardCss.display}`}>
                  <li>1 Ton <small>(min order)</small></li>
                  <li className={productcardCss.Product_Price}>
                    ₹ 1,39,999
                  </li>
                </ul>
                <button className={CartcardCss.button}>
                <i className="bi bi-cart"></i>
                <Link href="/cartpage"><a>Add to Cart</a></Link>
              </button>
              </div>
      
    </div>
  )
  })
}
</div>
<AiOutlineRight className='slider-icon right' onClick={slideRight}/>
    </div>


    <div id='cartmain-slider-container'> 
<AiOutlineLeft className='slider-icon left' onClick={sslideLeft}/>
<div id="scartslider">
{
  slides.map((slide,index)=>{
    return(
  <div className='cartslider-card' key=''>
      <div className={productcardCss.Product}>
                <Image src="/metal.png" alt="steel" className={productcardCss.cardimg}
                  width={400}
                  height={200} />
                <div className={productcardCss.bottom_right_detail}>
                  <small>
                    4.9 <i className="bi bi-star-fill"></i> (1349)
                  </small>
                </div>
              </div>
              <i className="fa-solid fa-ellipsis"></i>
              <div className={productcardCss.Product_detail}>
                <div className={productcardCss.Product_Title}>
                  <Link href="/product"><a><h3>Aluminum Scrap</h3></a></Link>
                  <p className={productcardCss.wishlist}> <i className="fa-solid fa-heart "></i></p>
                </div>
                <div className={productcardCss.Product_Description}>
                  <small>Recycled Aluminium scrap from blast furnace.</small>
                </div>
                <ul className={`${productcardCss.Product_Quantity} ${productcardCss.display}`}>
                  <li>1 Ton <small>(min order)</small></li>
                  <li className={productcardCss.Product_Price}>
                    ₹ 1,39,999
                  </li>
                </ul>
                <button className={CartcardCss.button}>
                <i className="bi bi-cart"></i>
                <Link href="/cartpage"><a>Add to Cart</a></Link>
              </button>
              </div>
      
    </div>
  )
  })
}
</div>
<AiOutlineRight className='slider-icon right' onClick={sslideRight}/>
    </div>
    </>
  )
}

export default demo1