import * as React from "react";
import Stack from "@mui/joy/Stack";
import Input from "@mui/joy/Input";
import LinearProgress from "@mui/joy/LinearProgress";
import Typography from "@mui/joy/Typography";
import Key from "@mui/icons-material/Key";

// import InputSubscription from "./InputSubscription";

function Form() {
  const [value, setValue] = React.useState("");

  const patterns = {
    veryWeak: /^.{3,}$/,
    weak: /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/,
    strong: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
    veryStrong:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/,
  };

  const getStrength = (password) => {
    if (patterns.veryStrong.test(password))
      return { label: "Very strong", color: "green" };
    if (patterns.strong.test(password))
      return { label: "Strong", color: "LimeGreen" };
    if (patterns.weak.test(password)) return { label: "Weak", color: "orange" };
    if (patterns.veryWeak.test(password))
      return { label: "Very weak", color: "red" };
    return { label: "", color: "transparent" };
  };

  const minLength = 1;
  const { label: strength, color } = getStrength(value);
  const progressValue = Math.min((value.length * 100) / minLength, 100);

  return (
    <Stack spacing={0.5} sx={{ "--hue": Math.min(value.length * 10, 120) }}>
      <Input
        type="password"
        placeholder="Type in here…"
        startDecorator={<Key />}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        sx={{
          borderColor: color,
          outline: "none",
          "& .MuiInputBase-input": {
            outline: "none",
          },
          "& .MuiInputBase-root": {
            "&:focus": {
              outline: "none",
              borderColor: color,
            },
          },
        }}
      />
      
    

      <LinearProgress
        determinate
        size="sm"
        value={progressValue}
        sx={{ bgcolor: "background.level3", color: color }}
      />
      <Typography level="body-xs" sx={{ alignSelf: "flex-end", color: color }}>
        {strength}
      </Typography>
    </Stack>
  );
}

export default Form;
