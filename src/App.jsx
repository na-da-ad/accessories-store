import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom"
import "./App.css"

const products = [
  {
    id: "1",
    name: "سلسلة ذهبية",
    price: "480 جنيه",
    image: "/images/necklace.jpg",
    shortDescription:
      "سلسلة ذهبية رقيقة تضيف لمسة بسيطة وراقية إلى إطلالتك.",
    description:
      "سلسلة ذهبية بتصميم ناعم وأنيق، مناسبة للاستخدام اليومي والمناسبات الخاصة."
  },
  {
    id: "2",
    name: "خاتم ناعم",
    price: "320 جنيه",
    image: "/images/ring.jpg",
    shortDescription:
      "خاتم أنيق بتصميم بسيط يناسب مختلف الإطلالات.",
    description:
      "خاتم ناعم بتصميم عصري وبسيط، يمكن تنسيقه بسهولة مع باقي الإكسسوارات."
  },
  {
    id: "3",
    name: "أسورة رقيقة",
    price: "350 جنيه",
    image: "/images/bracelet.jpg",
    shortDescription:
      "أسورة رقيقة وأنيقة تضيف لمسة ناعمة إلى إطلالتك.",
    description:
      "أسورة بتصميم أنيق وهادئ، مناسبة للاستخدام اليومي ويمكن تنسيقها مع مختلف الإطلالات."
  }
]

function Home() {
  return (
  <main id="home">
      <section className="hero">
        <p>NOIRE COLLECTION</p>
        <h1>إكسسوارات بسيطة، أناقة لا تُنسى</h1>
        <span>
          اكتشفي مجموعتنا المختارة من الإكسسوارات الناعمة والأنيقة.
        </span>
      </section>

     <section className="products-section" id="products">
        <h2>منتجاتنا</h2>

        <div className="products">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />

              <div className="product-info">
                <h3>{product.name}</h3>

                <p>{product.shortDescription}</p>

                <div className="card-bottom">
                  <strong>{product.price}</strong>

                  <Link to={`/product/${product.id}`}>
                    المزيد
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

function ProductDetails() {
  const { id } = useParams()

  const product = products.find((item) => item.id === id)

  if (!product) {
    return (
      <div className="not-found">
        <h2>المنتج غير موجود</h2>
        <Link to="/">العودة للمنتجات</Link>
      </div>
    )
  }

  return (
    <main className="details-page">
      <div className="details-card">
        <img src={product.image} alt={product.name} />

        <div className="details-info">
          <span>NOIRÉ COLLECTION</span>

          <h1>{product.name}</h1>

          <strong>{product.price}</strong>

          <p>{product.description}</p>

          <Link className="back-button" to="/">
            ← العودة للمنتجات
          </Link>
        </div>
      </div>
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link className="logo" to="/">
          NOIRE
        </Link>

        <div className="nav-links">
    <a href="#home">الرئيسية</a>
  <a href="#products">منتجاتنا</a>
  <a href="#footer">تواصل معنا</a>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    <footer className="footer" id="footer">
  <div className="footer-content">

    <div className="footer-brand">
      <h2>NOIRE</h2>
      <p>
        إكسسوارات ناعمة تضيف لمسة من الأناقة
        لكل إطلالة.
      </p>
    </div>

    <div className="footer-links">
      <h3>روابط سريعة</h3>
      <Link to="/">الرئيسية</Link>
      <Link to="/">الإكسسوارات</Link>
      <Link to="/">من نحن</Link>
    </div>

    <div className="footer-contact">
      <h3>تواصلي معنا</h3>
      <p> <a>qweyiiiu78@gmail.com</a></p>
      <p><a>01050570112</a></p>
    </div>

  </div>

  <div className="footer-bottom">
    <p>© 2026 NOIRÉ. جميع الحقوق محفوظة.</p>
  </div>
</footer>
    </BrowserRouter>
    
  )
}

export default App