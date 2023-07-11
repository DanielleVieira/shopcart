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
  const [buttonsLoading, setButtonsLoading] = useState({});

  const formHandleChange = (e) => {
    setFormValue(e.target.value);
  };

  const formHandleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(formValue) > 0)
      changeProductInCartAmountAction(dispatch, item.id, formValue);
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
      setFormValue(item.amount);
    }
  }, [item]);

  return (
    <ListGroupItemComponent
      item={item}
      formValue={formValue}
      formOnChange={formHandleChange}
      formOnSubmit={formHandleSubmit}
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
