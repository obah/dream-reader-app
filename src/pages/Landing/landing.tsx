import { Layout } from "../../components/layout";
import SearchBar from "../../components/searchBar";

export function Landing() {
  return (
    <Layout>
      <section className="landing-section">
        <div className="landing-text">
          <div className="landing-top-text">
            <h3>Hello Reader,</h3>
            <h1>
              All your favorite books in one place <br />
              <span>Dream Reader</span>{" "}
            </h1>
          </div>

          <div>
            <SearchBar />
          </div>

          <div className="landing-final-text">
            <p>
              <i>
                "Books are a uniquely portable magic."
                <br />
                <span>— Stephen King, On Writing: A Memoir of the Craft</span>
              </i>
            </p>
          </div>
        </div>

        <div className="landing-image">{/* put the animated image here */}</div>
      </section>
    </Layout>
  );
}
// import { Layout } from "../../components/layout";
// import { FaSearch, FaArrowRight } from "react-icons/fa";

// export function Landing() {
//   return (
//     <Layout>
//       <section className="landing-section">
//         <div className="landing-text">
//           <div className="landing-top-text">
//             <h3>Hello Reader,</h3>
//             <h1>
//               All your favorite books in one place <br />
//               <span>Dream Reader</span>{" "}
//             </h1>
//           </div>

//           <div className="landing-search">
//             <div className="landing-search-bar">
//               <div>
//                 <FaSearch />
//               </div>
//               <input type="text" placeholder="What book is on your mind?" />
//             </div>

//             <div className="landing-buttons">
//               <button>Search</button>
//               <button>
//                 Launch App <FaArrowRight />
//               </button>
//             </div>
//           </div>

//           <div className="landing-final-text">
//             <p>
//               <i>
//                 "Books are a uniquely portable magic."
//                 <br />
//                 <span>— Stephen King, On Writing: A Memoir of the Craft</span>
//               </i>
//             </p>
//           </div>
//         </div>

//         <div className="landing-image">{/* put the animated image here */}</div>
//       </section>
//     </Layout>
//   );
// }
