import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledButton = styled.button`
  background-image: linear-gradient(
    to right,
    #56ccf2 0%,
    #2f80ed 51%,
    #56ccf2 100%
  );
  margin: 10px;
  padding: 1rem 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
  cursor: pointer;
  &:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }
`;

export const Button = styled.button`
  margin: 10px;
  text-align: center;
  border-radius: 100rem;
  padding: 1rem;
  font-family: "Avenir Next";
  font-size: 1rem;
  padding: 0.5rem 2rem;
  color: $color-black;
  box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
  border: solid 3px transparent;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0)
    ),
    linear-gradient(101deg, #78e4ff, #ff48fa);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2px 1000px 1px #fff inset;
  cursor: pointer;
`;

export const ErrorP = styled.p`
  // margin-left: 2rem;
  display: inline-block;
  width: 14rem;
  color: red;
`;

export const H1 = styled.h1`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const H3 = styled.h3`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const H2 = styled.h2`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const RequiredSpan = styled.span`
  color: red;
`;

export const InlineDiv = styled.div`
  display: inline-block;
  margin-top: 1rem;
  margin-right: 2rem;
`;

export const SmallBox = styled.div`
  background-color: #f1f2f6;
  width: 130px;
  height: 125px;
  padding: 1rem;
  border: 1 solid rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeadingP = styled.p`
  font-size: 1.3rem;
  margin: 2rem;
`;

export const InvisibleBox = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LeftSpaceSpan = styled.span`
  padding-left: 1rem;
  font-family: "Inter", sans-serif !important;
`;

export const YCenterDiv = styled.div`
  display: flex;
  align-items: center;
  // justify-content: center;
`;

export const XCenterDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const DropDownItem = styled.div`
  width: 100%;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  &:hover {
    color: #f1f2f6;
  }
`;

export const DropDown = styled.div`
  overflow: hidden;
  width: 100%;
  position: relative;
  transition: 1s;
`;

export const PopUpBigMenu = styled.div`
  position: absolute;
  background-color: white;
  top: -750%;
  line-height: 1.6;
  left: 70%;
  overflow: hidden;
  width: 400px;
  height: 700px;
  margin: 1rem;
  z-index: 1020;
  diplay: flex;
  align-items: center;
  border-radius: 7px;
  justify-content: space-between;
  border: 1px solid rgba(0, 0, 0, 0.12);
`;

export const PopUpMenu = styled.div`
  position: absolute;
  background-color: white;
  top: -220%;
  width: 250px;
  line-height: 1.6;
  height: auto;
  padding: 1rem;
  margin: 1rem;
  z-index: 1020;
  diplay: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 7px;
`;

export const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: -1rem;
`;

export const NavItem = styled.nav`
  padding: 0.6rem 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
`;
export const NavItemsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const MediumButton = styled.button`
  background-image: linear-gradient(
    to right,
    #56ccf2 0%,
    #2f80ed 51%,
    #56ccf2 100%
  );
  padding: 0.7rem 0.8rem;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
  cursor: pointer;
  &:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }
`;

export const DownRightMenu = styled.div`
  position: absolute;
  background-color: white;
  top: 5%;
  right: 1%;
  line-height: 2;
  width: 10rem;
  font-weight: 500;
  line-height: 2;
  font-size: 1rem;
  height: auto;
  padding: 1rem;
  margin: 1rem;
  z-index: 1020;
  diplay: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 7px;
`;

export const FilterMenu = styled.div`
  position: absolute;
  position: inherital;
  background-color: white;
  top: 5%;
  left: 41%;
  line-height: 1.5;
  width: 17rem;
  font-weight: 500;
  line-height: 2;
  font-size: 1rem;
  height: auto;
  padding: 1rem;
  margin: 1rem;
  z-index: 1020;
  diplay: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 7px;
`;

export const FullScreenModal = styled.div`
  background-color: white;
  width: 100%;
  right: 0;
  top: 0;
  height: auto;
  position: fixed;
  position: absolute;
  z-index: 1200;
  // width: 100%;
  // height: 100%;
  // overflow-x: auto;
  // position: relative;
`;

export const ModalHeader = styled.div`
  width: 100%;
  height: 4rem;
  font-size: 1.4rem;
  font-weight: 500;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  position: relative;
  top: 0;
`;

export const ModalBody = styled.div`
  width: 100%;
  height: 88%;
`;

export const ModalFooter = styled.div`
  width: 100%;
  height: 4rem;
  position: relative;
  bottom: 0;
`;

export const InlineLine = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.12);
`;

export const Span = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
`;

export const Label = styled.label`
  font-size: 1rem;
  text-align: left;
`;

export const FlexDirYDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexDiv = styled.div`
  display: flex;
`;

export const SimpleButton = styled.div`
  margin: 0.2rem;
  text-align: center;
  padding: 0.2rem 0.7rem;
  border-radius: 7px;
  border: 1px solid rgba(0, 0, 0, 0.12);
`;

export const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FullDiv = styled.div`
  height: 100%;
  width: 100%;
`;

export const SpanLink = styled.div`
  cursor: pointer;
  color: rgb(49, 132, 237);
`;

export const Li = styled.li`
  padding: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`;

export const ToggleButton = styled.div`
  background-color: #f1f2f6;
  display: flex;
  width: fit-content;
  border-radius: 6px;
`;

export const WhiteDiv = styled.div`
  border-radius: 6px;
  margin: 3px;
`;

export const FirstBtn = styled.div`
  display: inline-block;
  button {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 17px;
    color: rgba(79, 86, 107, 0.7);
    min-height: 27px;
  }
`;

export const Backtab = styled.div`
  display: inline-block;
  button {
    background: #ffffff;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.15);
    border-radius: 7px;
    min-height: 27px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 17px;
    color: #1a1f36;
  }
`;

export const SubNav = styled.nav`
  margin: 2rem;
`;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

export const CustomDropZone = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: #130f40;
  width: 20rem;
  height: 18rem;
  color: white;
  text-align: center;
`;

export const Gallery = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
`;

export const GalleryMainItem = styled.div`
  width: 20rem;
  margin: 1rem;
  padding: 0.5rem;
  height: 18rem;
  border: 1px solid rgba(0, 0, 0, 0.12);
`;

export const GalleryItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem;
  height: 18rem;
  border: 1px solid rgba(0, 0, 0, 0.12);
`;

export const GalleryItem = styled.div`
  margin-right: 0.5rem;
  height: 8rem;
  width: 8rem;
  padding: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.12);
  img {
    object-fit: cover;
  }
`;
export const MessageBox = styled.div`
  display: flex;
  padding: 2rem 0;
`;
