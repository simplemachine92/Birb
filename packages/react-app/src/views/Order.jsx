import styled from "styled-components";
import React, { useState } from "react";
import { Button, InputNumber } from "antd";

const { utils, BigNumber } = require("ethers");

export const StyledButton = styled(Button)`
  height: 100%;
  background: #ffe171;
  border-width: 0px;
  &:hover {
    color: #454545;
    background: #7ee6cd;
    border-color: red;
  }
`;

const buyLinks = [
  {
    name: "Books-A-Million",
    link: "https://www.booksamillion.com/p/9781644212486",
  },
  {
    name: "Barnes & Noble",
    link: "https://www.barnesandnoble.com/w/proof-of-stake-vitalik-buterin/1140789169?ean=9781644212486&st=AFF&2sid=Random%20House%20Inc_8373827_NA&sourceId=AFFRandom%20House%20Inc",
  },
  {
    name: "Bookshop.org",
    link: "https://bookshop.org/books/proof-of-stake-essays-on-the-making-of-ethereum-and-the-future-of-the-internet/9781644212486",
  },
  {
    name: "Indie Bound",
    link: "https://www.indiebound.org/book/9781644212486",
  },
  {
    name: "Amazon",
    link: "https://www.amazon.com/gp/product/164421248X",
  },
  {
    name: "Target",
    link: "https://www.target.com/s?searchTerm=9781644212486",
  },
  {
    name: "Hudson",
    link: "https://www.hudsonbooksellers.com/book/9781644212486",
  },
  {
    name: "Walmart",
    link: "https://www.walmart.com/ip/Proof-of-Stake-Essays-on-the-Making-of-Ethereum-and-the-Future-of-the-Internet-Paperback-9781644212486/678274718",
  },
  {
    name: "Powells",
    link: "https://www.powells.com/book/-9781644212486",
  },
];

/**
 * web3 props can be passed from '../App.jsx' into your local view component for use
 * @param {*} yourLocalBalance balance on current network
 * @param {*} readContracts contracts from current chain already pre-loaded using ethers contract module. More here https://docs.ethers.io/v5/api/contract/contract/
 * @returns react component
 */
function Order({ writeContracts, tx }) {
  // you can also use hooks locally in your component of choice
  // in this case, let's keep track of 'purpose' variable from our contract
  const [uValue, setU] = useState("0.0001337");

  /*  const columns = [
    {
        title: "Retailer",
        dataIndex: "pledge",
  
        sorter: (a, b) => a.pledge - b.pledge,
        sortDirections: ["ascend"],
      },] */

  return (
    <>
      <div>
        {/* <h3 className="title">Take the Green Pill:</h3>
          <h3 className="title">Regenerative CryptoEconomics</h3> */}

        <form action="https://www.boulderbookstore.net/">
          <div className="hero-container">
            <img src="image/reee.svg" />
            {/* Fix button redirect */}

            <button className="btn">Boulder Book Store</button>
          </div>
        </form>

        <footer className="pledge-container">
          <h5>Pre-Order Now</h5>
          <br />
          {/* <a href="https://www.amazon.com/gp/product/164421248X">Amazon</a> <br />
              <a href="https://www.target.com/s?searchTerm=9781644212486">Target</a> */}
          <section className="green-pill-form-section">
            <div className="">
              <table className="text-center text-white mx-auto p-5">
                <thead></thead>
                <tbody>
                  <tr>
                    <td className="p-3">
                      <a href="https://www.booksamillion.com/p/9781644212486">Books-A-Million</a>
                    </td>
                    <td className="p-3">
                      <a href="https://www.barnesandnoble.com/w/proof-of-stake-vitalik-buterin/1140789169?ean=9781644212486&st=AFF&2sid=Random%20House%20Inc_8373827_NA&sourceId=AFFRandom%20House%20Inc">
                        Barnes & Noble
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3">
                      <a href="https://bookshop.org/books/proof-of-stake-essays-on-the-making-of-ethereum-and-the-future-of-the-internet/9781644212486">
                        Bookshop.org
                      </a>
                    </td>
                    <td className="p-3">
                      <a href="https://www.indiebound.org/book/9781644212486">Indie Bound</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3">
                      <a href="https://www.amazon.com/gp/product/164421248X">Amazon</a>
                    </td>

                    <td className="p-3">
                      <a href="https://www.target.com/s?searchTerm=9781644212486">Target</a>
                    </td>
                  </tr>

                  <tr>
                    <td className="p-3">
                      <a href="https://www.hudsonbooksellers.com/book/9781644212486">Hudson</a>
                    </td>

                    <td className="p-3">
                      <a href="https://www.walmart.com/ip/Proof-of-Stake-Essays-on-the-Making-of-Ethereum-and-the-Future-of-the-Internet-Paperback-9781644212486/678274718">
                        Walmart
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="p-3">
                      <a href="https://www.powells.com/book/-9781644212486">Powells</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="text-center mb-20">
                <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                  Boulder Book Store
                </h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Pre-Order Now</p>
              </div>
              <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                {buyLinks.map(item => (
                  <div className="p-2 sm:w-1/2 w-full">
                    <a
                      href={item.link}
                      className="border-4 border-yellow-poslight rounded flex p-4 h-full items-center hover:bg-yellow-poslight"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        className="text-yellow-pos w-6 h-6 flex-shrink-0 mr-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <h1 className="font-bold font-spacemono text-xl">{item.name}</h1>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* FOOTER */}
          <div>
            <div className="container px-5 py-6 mx-auto flex items-center justify-center">
              <a
                href="https://gitcoindao.com"
                className="flex title-font font-medium items-center justify-center text-gray-900"
              >
                <img src="/image/gitcoindao_sign.svg" alt="gitcoinDAO" />
              </a>
              <p className="text-3xl text-gray-500 sm:ml-6 sm:mt-4 mt-2 text-white font-spacemono">
                <span className="text-white">|</span>{" "}
                <a href="https://t.me/+g9TM8i7GpxAzMGUx" className="text-white">
                  Join the Telegram
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Order;
