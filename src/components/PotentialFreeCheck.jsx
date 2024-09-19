import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { potentialFreeCheckStore } from "@/store/FormData";
import html2canvas from "html2canvas";

export default function PotentialFreeCheck() {
  const [checkBoxData, setCheckBoxData] = useRecoilState(
    potentialFreeCheckStore
  );
  const [loading, setLoading] = useState(false);
  const takeScreenshort = async (sectionId, testId) => {
    console.log(sectionId + "started screenshort processing");
    const section = document.getElementById(sectionId);
    const canvas = await html2canvas(section);
    const imgData = canvas.toDataURL("image/png");


    // Convert the base64 image data to a blob
    const blob = await (await fetch(imgData)).blob();

    // Use the File System Access API to save the file
    if ("showSaveFilePicker" in window) {
      try {
        const fileHandle = await window.showSaveFilePicker({
          suggestedName: testId
            ? testId + "-" + sectionId + ".png"
            : sectionId + ".png",
          types: [
            {
              description: "PNG Image",
              accept: { "image/png": [".png"] },
            },
          ],
        });

        const writableStream = await fileHandle.createWritable();
        await writableStream.write(blob);
        await writableStream.close();
        console.log("Image saved successfully");
        downloadReport();
      } catch (error) {
        console.error("Save operation was cancelled or failed:", error);
      }
    } else {
      alert("Your browser does not support the File System Access API.");
    }
  };
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckBoxData((prevState) => ({
      ...prevState,
      checkboxes: {
        ...prevState.checkboxes,
        [name]: checked,
      },
    }));
    console.log(checkBoxData);
  };
  const downloadReport = async () => {
    setLoading(true);
    console.log("Download Report is pressed");
    try {
      const res = await fetch("http://localhost:8080/device/runTest", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const result = await res.json();
      // const result = "IN PROGRESS";
      console.log(result.data);
      setLoading(false);
      if (result.data != "IN PROGRESS") {
        setResponseMessage(result);
      } else {
        setActionMessage("IN PROGRESS");
        setActionModal(true);
      }
    } catch (error) {
      throw new Error(`HTTP error! status:`, error);
    } finally {
      console.log("Download Process completed");
    }
  };
  return (
    <div className="check-box-check form-section">
      <h4>
        Start recording of ADS potential free indication checks-Potential Free
      </h4>
      <table className="checkbox-table" id="potentialFreeCheck">
        <tbody>
          <tr>
            <td>Actual Tap</td>
            <td>
              <label for="check-tap-1" class="tap-no">
                1
              </label>
            </td>
            <td>
              <label for="check-tap-2" class="tap-no">
                2
              </label>
            </td>
            <td>
              <label for="check-tap-3" class="tap-no">
                3
              </label>
            </td>
            <td>
              <label for="check-tap-4" class="tap-no">
                4
              </label>
            </td>
            <td>
              <label for="check-tap-5" class="tap-no">
                5
              </label>
            </td>
            <td>
              <label for="check-tap-6" class="tap-no">
                6
              </label>
            </td>
            <td>
              <label for="check-tap-7" class="tap-no">
                7
              </label>
            </td>
            <td>
              <label for="check-tap-8" class="tap-no">
                8
              </label>
            </td>
            <td>
              <label for="check-tap-9" class="tap-no">
                9
              </label>
            </td>
            <td>
              <label for="check-tap-10" class="tap-no">
                10
              </label>
            </td>
            <td>
              <label for="check-tap-11" class="tap-no">
                11
              </label>
            </td>
            <td>
              <label for="check-tap-12" class="tap-no">
                12
              </label>
            </td>
            <td>
              <label for="check-tap-13" class="tap-no">
                13
              </label>
            </td>
            <td>
              <label for="check-tap-14" class="tap-no">
                14
              </label>
            </td>
            <td>
              <label for="check-tap-15" class="tap-no">
                15
              </label>
            </td>
          </tr>
          <tr>
            <td>LED Indiacation Actual Tap</td>
            <td>
              <input
                type="checkbox"
                name="check-tap-1"
                id="check-tap-1"
                checked={checkBoxData.checkboxes["check-tap-1"] || false}
                onChange={handleCheckboxChange}
              />
            </td>
            <td>
              <input
                type="checkbox"
                name="check-tap-2"
                id="check-tap-2"
                checked={checkBoxData.checkboxes["check-tap-2"] || false}
                onChange={handleCheckboxChange}
              />
            </td>
            <td>
              <input
                type="checkbox"
                name="check-tap-3"
                id="check-tap-3"
                checked={checkBoxData.checkboxes["check-tap-3"] || false}
                onChange={handleCheckboxChange}
              />
            </td>
            <td>
              <input
                type="checkbox"
                name="check-tap-4"
                id="check-tap-4"
                checked={checkBoxData.checkboxes["check-tap-4"] || false}
                onChange={handleCheckboxChange}
              />
            </td>
            <td>
              <input
                type="checkbox"
                name="check-tap-5"
                id="check-tap-5"
                checked={checkBoxData.checkboxes["check-tap-5"] || false}
                onChange={handleCheckboxChange}
              />
            </td>
            <td>
              <input
                type="checkbox"
                name="check-tap-6"
                id="check-tap-6"
                checked={checkBoxData.checkboxes["check-tap-6"] || false}
                onChange={handleCheckboxChange}
              />
            </td>
            <td>
              <input
                type="checkbox"
                name="check-tap-7"
                id="check-tap-7"
                checked={checkBoxData.checkboxes["check-tap-7"] || false}
                onChange={handleCheckboxChange}
              />
            </td>
            <td>
              <input
                type="checkbox"
                name="check-tap-8"
                id="check-tap-8"
                checked={checkBoxData.checkboxes["check-tap-8"] || false}
                onChange={handleCheckboxChange}
              />
            </td>
            <td>
              <input
                type="checkbox"
                name="check-tap-9"
                id="check-tap-9"
                checked={checkBoxData.checkboxes["check-tap-9"] || false}
                onChange={handleCheckboxChange}
              />
            </td>
            <td>
              <input
                type="checkbox"
                name="check-tap-10"
                id="check-tap-10"
                checked={checkBoxData.checkboxes["check-tap-10"] || false}
                onChange={handleCheckboxChange}
              />
            </td>
            <td>
              <input
                type="checkbox"
                name="check-tap-11"
                id="check-tap-11"
                checked={checkBoxData.checkboxes["check-tap-11"] || false}
                onChange={handleCheckboxChange}
              />
            </td>
            <td>
              <input
                type="checkbox"
                name="check-tap-12"
                id="check-tap-12"
                checked={checkBoxData.checkboxes["check-tap-12"] || false}
                onChange={handleCheckboxChange}
              />
            </td>
            <td>
              <input
                type="checkbox"
                name="check-tap-13"
                id="check-tap-13"
                checked={checkBoxData.checkboxes["check-tap-13"] || false}
                onChange={handleCheckboxChange}
              />
            </td>
            <td>
              <input
                type="checkbox"
                name="check-tap-14"
                id="check-tap-14"
                checked={checkBoxData.checkboxes["check-tap-14"] || false}
                onChange={handleCheckboxChange}
              />
            </td>
            <td>
              <input
                type="checkbox"
                name="check-tap-15"
                id="check-tap-15"
                checked={checkBoxData.checkboxes["check-tap-15"] || false}
                onChange={handleCheckboxChange}
              />
            </td>
          </tr>
          <tr>
            <td>Actual Tap</td>
            <td>
              <label for="check-tap-16" class="tap-no">
                16
              </label>
            </td>
            <td>
              <label for="check-tap-17" class="tap-no">
                17
              </label>
            </td>
            <td>
              <label for="check-tap-18" class="tap-no">
                18
              </label>
            </td>
            <td>
              <label for="check-tap-19" class="tap-no">
                19
              </label>
            </td>
            <td>
              <label for="check-tap-20" class="tap-no">
                20
              </label>
            </td>
            <td>
              <label for="check-tap-21" class="tap-no">
                21
              </label>
            </td>
            <td>
              <label for="check-tap-22" class="tap-no">
                22
              </label>
            </td>
            <td>
              <label for="check-tap-23" class="tap-no">
                23
              </label>
            </td>
            <td>
              <label for="check-tap-24" class="tap-no">
                24
              </label>
            </td>
            <td>
              <label for="check-tap-25" class="tap-no">
                25
              </label>
            </td>
            <td>
              <label for="check-tap-26" class="tap-no">
                26
              </label>
            </td>
            <td>
              <label for="check-tap-27" class="tap-no">
                27
              </label>
            </td>
            <td>
              <label for="check-tap-28" class="tap-no">
                28
              </label>
            </td>
            <td>
              <label for="check-tap-29" class="tap-no">
                29
              </label>
            </td>
            <td>
              <label for="check-tap-30" class="tap-no">
                30
              </label>
            </td>
          </tr>
          <tr>
            <td>LED Indiacation Actual Tap</td>
            <td>
              <input
                type="checkbox"
                name="check-tap-16"
                id="check-tap-16"
                checked={checkBoxData.checkboxes["check-tap-16"] || false}
                onChange={handleCheckboxChange}
              />
            </td>
            <td>
              <input
                type="checkbox"
                name="check-tap-17"
                id="check-tap-17"
                checked={checkBoxData.checkboxes["check-tap-17"] || false}
                onChange={handleCheckboxChange}
              />
            </td>
            <td>
              <input
                type="checkbox"
                name="check-tap-18"
                id="check-tap-18"
                checked={checkBoxData.checkboxes["check-tap-18"] || false}
                onChange={handleCheckboxChange}
              />
            </td>
            <td>
              <input
                type="checkbox"
                name="check-tap-19"
                id="check-tap-19"
                checked={checkBoxData.checkboxes["check-tap-19"] || false}
                onChange={handleCheckboxChange}
              />
            </td>
            <td>
              <input
                type="checkbox"
                name="check-tap-20"
                id="check-tap-20"
                checked={checkBoxData.checkboxes["check-tap-20"] || false}
                onChange={handleCheckboxChange}
              />
            </td>
            <td>
              <input
                type="checkbox"
                name="check-tap-21"
                id="check-tap-21"
                checked={checkBoxData.checkboxes["check-tap-21"] || false}
                onChange={handleCheckboxChange}
              />
            </td>
            <td>
              <input
                type="checkbox"
                name="check-tap-22"
                id="check-tap-22"
                checked={checkBoxData.checkboxes["check-tap-22"] || false}
                onChange={handleCheckboxChange}
              />
            </td>
            <td>
              <input
                type="checkbox"
                name="check-tap-23"
                id="check-tap-23"
                checked={checkBoxData.checkboxes["check-tap-23"] || false}
                onChange={handleCheckboxChange}
              />
            </td>
            <td>
              <input
                type="checkbox"
                name="check-tap-24"
                id="check-tap-24"
                checked={checkBoxData.checkboxes["check-tap-24"] || false}
                onChange={handleCheckboxChange}
              />
            </td>
            <td>
              <input
                type="checkbox"
                name="check-tap-25"
                id="check-tap-25"
                checked={checkBoxData.checkboxes["check-tap-25"] || false}
                onChange={handleCheckboxChange}
              />
            </td>
            <td>
              <input
                type="checkbox"
                name="check-tap-26"
                id="check-tap-26"
                checked={checkBoxData.checkboxes["check-tap-26"] || false}
                onChange={handleCheckboxChange}
              />
            </td>
            <td>
              <input
                type="checkbox"
                name="check-tap-27"
                id="check-tap-27"
                checked={checkBoxData.checkboxes["check-tap-27"] || false}
                onChange={handleCheckboxChange}
              />
            </td>
            <td>
              <input
                type="checkbox"
                name="check-tap-28"
                id="check-tap-28"
                checked={checkBoxData.checkboxes["check-tap-28"] || false}
                onChange={handleCheckboxChange}
              />
            </td>
            <td>
              <input
                type="checkbox"
                name="check-tap-29"
                id="check-tap-29"
                checked={checkBoxData.checkboxes["check-tap-29"] || false}
                onChange={handleCheckboxChange}
              />
            </td>
            <td>
              <input
                type="checkbox"
                name="check-tap-30"
                id="check-tap-30"
                checked={checkBoxData.checkboxes["check-tap-30"] || false}
                onChange={handleCheckboxChange}
              />
            </td>
          </tr>
          <tr>
            <td>Actual Tap</td>
            <td>
              <label for="check-tap-31" class="tap-no">
                31
              </label>
            </td>
            <td>
              <label for="check-tap-32" class="tap-no">
                32
              </label>
            </td>
            <td>
              <label for="check-tap-33" class="tap-no">
                33
              </label>
            </td>
            <td>
              <label for="check-tap-34" class="tap-no">
                34
              </label>
            </td>
            <td>
              <label for="check-tap-35" class="tap-no">
                35
              </label>
            </td>
          </tr>
          <tr>
            <td>LED Indiacation Actual Tap</td>
            <td>
              <input
                type="checkbox"
                name="check-tap-31"
                id="check-tap-31"
                checked={checkBoxData.checkboxes["check-tap-31"] || false}
                onChange={handleCheckboxChange}
              />
            </td>
            <td>
              <input
                type="checkbox"
                name="check-tap-32"
                id="check-tap-32"
                checked={checkBoxData.checkboxes["check-tap-32"] || false}
                onChange={handleCheckboxChange}
              />
            </td>
            <td>
              <input
                type="checkbox"
                name="check-tap-33"
                id="check-tap-33"
                checked={checkBoxData.checkboxes["check-tap-33"] || false}
                onChange={handleCheckboxChange}
              />
            </td>
            <td>
              <input
                type="checkbox"
                name="check-tap-34"
                id="check-tap-34"
                checked={checkBoxData.checkboxes["check-tap-34"] || false}
                onChange={handleCheckboxChange}
              />
            </td>
            <td>
              <input
                type="checkbox"
                name="check-tap-35"
                id="check-tap-35"
                checked={checkBoxData.checkboxes["check-tap-35"] || false}
                onChange={handleCheckboxChange}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button
        type="submit"
        className="action-button"
        onClick={() => takeScreenshort("potentialFreeCheck", null)}
      >
        Save
      </button>
    </div>
  );
}
