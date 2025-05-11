import BottomText from "@/components/auth/register/BottomText";
import RegisterForm from "@/components/auth/register/RegisterForm";
import CustomDivider from "@/components/shared/utils/Divider";

function Register() {
  return (
    <div className=" w-[500px] bg-white/80 py-8 px-16 flex flex-wrap justify-center items-center rounded-lg">
      <RegisterForm />
      <CustomDivider width="w-2/5" />
      <BottomText />
    </div>
  );
}

export default Register;
