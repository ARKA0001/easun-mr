import React from "react";
import moveSection from "@/utils/SectionMove";
import { useRecoilState } from "recoil";
import { activeSection } from "@/store/Section";
import { useForm } from "react-hook-form";

export default function Section4() {
  const [currentActiveSection, setCurrentActiveSection] =
    useRecoilState(activeSection);

  const handleSectionMove = (currentSection, moveAction) => {
    console.log(currentSection);
    setCurrentActiveSection(moveSection(currentSection, moveAction));
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log("This is section 4 data");
    const section4Data = {
      field57: data.field57,
      field58: data.field58,
      field59: data.field59,
      field60: data.field60,
      field61: data.field61,
      field62: data.field62,
      field63: data.field63,
      field64: data.field64,
      field65: data.field65,
      field66: data.field66,
      field67: data.field67,
      field68: data.field68,
    };

    console.log(section4Data);
    handleSectionMove(4, 1);

    // try {
    //   const res = await fetch("http://localhost:8080/device/testData/1/"+{testIdResponse}, {
    //     method: "PUT",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(section1Data),
    //   });

    //   if (!res.ok) {
    //     throw new Error(`HTTP error! status: ${res.status}`);
    //   }
    //   setResponse(null);
    //   handleSectionMove(1,1)
    // } catch (error) {
    //   setResponse({ error: error.message });
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div className="form-section">
      <form onSubmit={handleSubmit(onSubmit)}>
        <table className="toggle-table">
          <tbody>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-1-1" className="field-label">
                  IPX5 sticket with QA Sign
                </label>
              </td>
              <td className="toggle-container">
                <input
                  type="checkbox"
                  id="toggle-1-1"
                  className="toggle-input"
                  {...register("field57")}
                />
                <label htmlFor="toggle-1-1" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-1-2" className="field-label">
                  HV test availability
                </label>
              </td>
              <td className="toggle-container">
                <input
                  type="checkbox"
                  id="toggle-1-2"
                  className="toggle-input"
                  {...register("field58")}
                />
                <label htmlFor="toggle-1-2" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-1-3" className="field-label">
                  DANGER STICKER as per the Motor Voltage
                </label>
              </td>
              <td className="toggle-container">
                <input
                  type="checkbox"
                  id="toggle-1-3"
                  className="toggle-input"
                  {...register("field59")}
                />
                <label htmlFor="toggle-1-3" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-1-4" className="field-label">
                  Rotate the hand crank and check the raise and lower direction
                  symbol
                </label>
              </td>
              <td className="toggle-container">
                <input
                  type="checkbox"
                  id="toggle-1-4"
                  className="toggle-input"
                  {...register("field60")}
                />
                <label htmlFor="toggle-1-4" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-1-5" className="field-label">
                  Phase sequences attention sticker
                </label>
              </td>
              <td className="toggle-container">
                <input
                  type="checkbox"
                  id="toggle-1-5"
                  className="toggle-input"
                  {...register("field61")}
                />
                <label htmlFor="toggle-1-5" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-1-6" className="field-label">
                  Proximity wiring shorting stickers
                </label>
              </td>
              <td className="toggle-container">
                <input
                  type="checkbox"
                  id="toggle-1-6"
                  className="toggle-input"
                  {...register("field62")}
                />
                <label htmlFor="toggle-1-6" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-1-7" className="field-label">
                  Hand revolution sticker
                </label>
              </td>
              <td className="toggle-container">
                <input
                  type="checkbox"
                  id="toggle-1-7"
                  className="toggle-input"
                  {...register("field63")}
                />
                <label htmlFor="toggle-1-7" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-1-8" className="field-label">
                  CAM switch stickers as per legend
                </label>
              </td>
              <td className="toggle-container">
                <input
                  type="checkbox"
                  id="toggle-1-8"
                  className="toggle-input"
                  {...register("field64")}
                />
                <label htmlFor="toggle-1-8" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-1-9" className="field-label">
                  ADS wire stickers/labels
                </label>
              </td>
              <td className="toggle-container">
                <input
                  type="checkbox"
                  id="toggle-1-9"
                  className="toggle-input"
                  {...register("field65")}
                />
                <label htmlFor="toggle-1-9" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-1-10" className="field-label">
                  Electrical Limit switch stickets
                </label>
              </td>
              <td className="toggle-container">
                <input
                  type="checkbox"
                  id="toggle-1-10"
                  className="toggle-input"
                  {...register("field66")}
                />
                <label htmlFor="toggle-1-10" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-1-11" className="field-label">
                  Mechanical limit switch stickers
                </label>
              </td>
              <td className="toggle-container">
                <input
                  type="checkbox"
                  id="toggle-1-11"
                  className="toggle-input"
                  {...register("field67")}
                />
                <label htmlFor="toggle-1-11" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-1-12" className="field-label">
                  Earthling sticker at both the sides near earth bolt
                </label>
              </td>
              <td className="toggle-container">
                <input
                  type="checkbox"
                  id="toggle-1-12"
                  className="toggle-input"
                  {...register("field68")}
                />
                <label htmlFor="toggle-1-12" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit" className="action-button">
          Save & Next
        </button>
      </form>
    </div>
  );
}
