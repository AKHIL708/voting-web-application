import React, { useState } from "react";
import bjp from "../../assets/images/bjp.png";
import CheckIcon from "@mui/icons-material/Check";
import { useNavigate } from "react-router-dom";
import "./Elections.scss";

function Elections() {
  const navigate = useNavigate();
  const [Elections, setElections] = useState([
    {
      candidate_id: "123",
      name: "akhil",
      party_name: "unknown",
    },
    {
      candidate_id: "123",
      name: "akhil",
      party_name: "unknown",
    },
    {
      candidate_id: "123",
      name: "akhil",
      party_name: "unknown",
    },
    {
      candidate_id: "123",
      name: "akhil",
      party_name: "unknown",
    },
  ]);
  const [selected, setSelected] = useState(null);

  const SelectCard = (index) => {
    setSelected(index);
  };
  const SelectCandidate = () => {
    navigate("/candidates");
  };

  return (
    <>
      <section id="candidate-selection">
        <header>
          <h1>Select Election</h1>
        </header>
        <div className="cards">
          {Elections.map((data, index) => {
            return (
              <>
                <div className="card" onClick={() => SelectCard(index)}>
                  <div
                    className={`image-holder ${
                      selected === index ? "image-selected" : ""
                    }`}
                    style={{ backgroundImage: `url(${bjp})` }}
                  >
                    {selected === index ? (
                      <>
                        <div className="circle">
                          <CheckIcon className="icon" />
                        </div>
                      </>
                    ) : (
                      <></>
                    )}

                    {/* <img src={bjp} alt="" /> */}
                  </div>
                  <h1>{data.name}</h1>
                </div>
              </>
            );
          })}
        </div>
        <div className="select-btn">
          <button onClick={() => SelectCandidate()}>Select Candidate</button>
        </div>
      </section>
    </>
  );
}

export default Elections;
