import { Button, Spinner } from "react-bootstrap";

export const ButtonLoadingComponent = ({
  icon,
  label,
  loadingLabel,
  loading,
  ...buttonProps
}) => {
  return (
    <>
      {loading ? (
        <Button {...buttonProps} disabled={true}>
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          {loadingLabel}
        </Button>
      ) : (
        <Button {...buttonProps}>
          {label} <i className={icon}></i>
        </Button>
      )}
    </>
  );
};
