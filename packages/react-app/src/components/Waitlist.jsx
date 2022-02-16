import styled from "styled-components";
import { Select, Spin, Space, Table, Input, List } from "antd";
import React, { useState, useEffect } from "react";
import { Address, BottomLinks } from "../components";

import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, get, child } from "firebase/database";
import { Footer, Quotes, AboutTheBook, GitcoinBar } from "../components";

import { Link } from "react-router-dom";

export default function Waitlist({ yourLocalBalance, mainnetProvider, price, address, firebaseConfig, events }) {
  // Get a list of tokens from a tokenlist -> see tokenlists.org!

  const [ready2, setReady2] = useState(false);
  const [list, setList] = useState();

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  let dbList = [];

  let objectList = [];

  let eventList = [];

  let toSign = [];

  useEffect(
    async () => {
      const dbRef = ref(getDatabase(app));
      get(child(dbRef, `PoS/`)).then(snapshot => {
        if (snapshot.exists()) {
          snapshot.forEach(sig => {
            let message = sig.val().message;
            dbList.push(message.recipient);
          });
          console.log("dblist", dbList);
          if (dbList.length) {
            events.forEach(pledge => {
              eventList.push(pledge.args.pledgee);
              console.log("event list", eventList);
              objectList.push(pledge);
              console.log("object list", objectList);
              for (let x = 0; x < eventList.length; x++) {
                if (dbList.includes(eventList[x])) {
                  // do nothing
                } else if (eventList[x] != undefined) {
                  // push to to-do

                  let toPush = JSON.parse(JSON.stringify(objectList[x]));
                  console.log("to push", toPush);
                  toPush.address = objectList[x].args[0];
                  toSign.push(toPush);
                  setList(toSign);
                  setReady2(true);

                  console.log("list", toSign);
                }
              }
            });
          }
        }
      });
    },
    [events],
    [mainnetProvider],
  );

  const [value2, setValue2] = useState("");

  const [dataSource2, setDataSource2] = useState(toSign);

  const FilterByNameInput2 = (
    <Input
      placeholder="Search by Address (Case Sensitive)"
      value={value2}
      onChange={f => {
        const currValue2 = f.target.value;
        setValue2(currValue2);
        const filteredData2 = list.filter(entry2 => entry2.address.includes(currValue2));
        setDataSource2(filteredData2);
      }}
    />
  );

  const columns2 = [
    {
      title: FilterByNameInput2,
      dataIndex: "address",
      render: record2 =>
        ready2 == true && record2 != undefined ? <Address value={record2} ensProvider={mainnetProvider} /> : <Spin />,
      key: "1",
    },
    {
      title: "Pledge",
      dataIndex: "pledge",

      sorter: (a, b) => a.pledge - b.pledge,
      sortDirections: ["ascend"],
    },
  ];

  return (
    <div className="">
      {ready2 == true ? (
        <div className="container mx-auto">
          <h6 className="text-yellow-pos font-bold text-3xl">Signature Waitlist</h6>
          <br />
          <Table pagination={{ pageSize: 5 }} columns={columns2} dataSource={dataSource2} />
        </div>
      ) : (
        <div>
          <Spin />
        </div>
      )}
    </div>
  );
}
