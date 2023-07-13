import { useEffect, useState } from "react";
import { ListGroupItemComponent } from "../../components/ListGroup/ListGroupItemComponent";
import { useAppContext } from "../../store/AppContext";
import {
  changeProductInCartAmountAction,
  removeItemInCartAction,
} from "../../store/actions";

export const ListGroupItemContainer = ({ item }) => {
  const { dispatch } = useAppContext();
  const [formValue, setFormValue] = useState("");
  const [itemAmount, setItemAmount] = useState("");
  const [buttonsLoading, setButtonsLoading] = useState({});

  const formHandleChange = (e) => {
    setFormValue(e.target.value);
  };

  const formHandleBlur = () => {
    setFormValue(itemAmount);
  };

  const formHandleSubmit = async (e) => {
    e.preventDefault();
    if (parseInt(formValue) > 0) {
      await changeProductInCartAmountAction(dispatch, item.id, formValue);
      setFormValue(formValue);
    }
  };

  const handleClick = async (buttonId) => {
    setButtonsLoading((prevState) => ({
      ...prevState,
      [buttonId]: true,
    }));
    await removeItemInCartAction(dispatch, item.id);
    setButtonsLoading((prevState) => ({
      ...prevState,
      [buttonId]: false,
    }));
  };

  useEffect(() => {
    if (item) {
      setItemAmount(item.amount);
    }
  }, [item]);

  useEffect(() => {
    setFormValue(itemAmount);
  }, [itemAmount]);

  return (
    <ListGroupItemComponent
      item={item}
      formValue={formValue}
      formOnChange={formHandleChange}
      formOnSubmit={formHandleSubmit}
      formOnBlur={formHandleBlur}
      buttons={[
        {
          loading: buttonsLoading["remove"],
          icon: "bi bi-trash",
          variant: "danger",
          onClick: () => handleClick("remove"),
          disabled: buttonsLoading["remove"],
        },
      ]}
    />
  );
};
