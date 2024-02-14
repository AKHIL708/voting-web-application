import React, { useState } from "react";
import bjp from "../../assets/images/bjp.png";
import CheckIcon from "@mui/icons-material/Check";
import "./CandidateSelection.scss";

function CandidateSelection() {
  const [candidates, setCandidates] = useState([
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

  return (
    <>
      <section id="candidate-selection">
        <header>
          <h1>Select Candidate</h1>
        </header>
        <div className="cards">
          {candidates.map((data, index) => {
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
            <button>Select</button>
        </div>
      </section>
    </>
  );
}

export default CandidateSelection;
