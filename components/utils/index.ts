import * as styles from "./styles";
import BouncingLoader from "./BouncingLoader";
import NumericInput from "./NumericInput";
import { ImageBordered } from "./ImageBordered";
import {
  Container,
  ContainerWrapper,
  LoginContainerWrapper,
  MainRaisedWrapper
} from "./GlobalStyles/Container";
import { DefaultFont } from "./GlobalStyles/GlobalCss";
import FormWrapper from "./GlobalStyles/FormWrapper";
import Button from "./Components/Button/Button";
import { ButtonWrapperStyle } from "./Components/Button/ButtonStyle";
import Parallax from "./Components/Parallax";
import Dropdown from "./Components/Dropdown/Dropdown";
import CustomInput from "./Components/CustomInput";
import ErrorMessage from "./Components/ErrorMessage";
import Header from "./Components/Header/Header";
import Card from "./Components/Card/Card";
import CardHeader from "./Components/Card/CardHeader";
import CardBody from "./Components/Card/CardBody";
import CardFooter from "./Components/Card/CardFooter";
import Carousel from "./Components/Carousel/Carousel";
import { PageTitle, PageSubtitle } from "./GlobalStyles/PageTitle";

import calcTotalPrice, {
  calcTotalItems,
  calcItemTotalPrice
} from "./lib/calcTotalPrice";
import formatMoney from "./lib/formatMoney";
import formatOrderStatus from "./lib/formatOrderStatus";
import formatDate from "./lib/formatDate";
import { addZeroIfNeeded } from "./lib/numberUtility";

export {
  BouncingLoader,
  Button,
  ButtonWrapperStyle,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Container,
  ContainerWrapper,
  DefaultFont,
  FormWrapper,
  Dropdown,
  CustomInput,
  Header,
  ImageBordered,
  LoginContainerWrapper,
  MainRaisedWrapper,
  NumericInput,
  ErrorMessage,
  Parallax,
  Carousel,
  styles,
  calcTotalPrice,
  calcTotalItems,
  calcItemTotalPrice,
  addZeroIfNeeded,
  formatMoney,
  formatOrderStatus,
  formatDate,
  PageTitle,
  PageSubtitle
};
