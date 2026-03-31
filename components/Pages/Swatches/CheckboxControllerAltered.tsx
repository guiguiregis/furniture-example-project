import { CSSProperties } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Checkbox, { checkboxClasses } from '@mui/material/Checkbox';
import colors from '@/constants/colors';
import { CheckboxLabel } from './styles';

const CheckboxControllerAltered = ({
  name,
  style,
  setCheckBoxValue,
}: {
  name: string;
  text: string;
  style?: CSSProperties;
  locale?: string;
  setCheckBoxValue: any;
}) => {
  const { control } = useForm();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckBoxValue(event.target.checked);
  };
  // const { control } = useForm();

  // const termsTextEN = (
  //   <p style={style}>
  //     I agree to receive notifications on product launches, updates, and
  //     exclusive content via SMS or email. View{' '}
  //     <a href="https://www.cozey.ca/terms" target="_blank" rel="noreferrer">
  //       <strong
  //         style={{
  //           textDecorationLine: 'underline',
  //           fontFamily: 'Larsseit Bold',
  //         }}
  //       >
  //         Terms of Use
  //       </strong>
  //     </a>{' '}
  //     and{' '}
  //     <a href="https://www.cozey.ca/privacy" target="_blank" rel="noreferrer">
  //       <strong
  //         style={{
  //           textDecorationLine: 'underline',
  //           fontFamily: 'Larsseit Bold',
  //         }}
  //       >
  //         Privacy Policy
  //       </strong>
  //     </a>
  //     .
  //   </p>
  // );

  // const termsTextFR = (
  //   <p style={style}>
  //     J’accepte de recevoir des notifications de lancements de produits et
  //     nouvelles exclusives par SMS ou courriel. Voir{' '}
  //     <a href="/fr/terms" target="_blank">
  //       <strong style={{ textDecorationLine: 'underline' }}>
  //         Conditions d’utilisation
  //       </strong>
  //     </a>{' '}
  //     et{' '}
  //     <a href="/fr/privacy" target="_blank">
  //       <strong style={{ textDecorationLine: 'underline' }}>
  //         Politique de confidentialité
  //       </strong>
  //     </a>
  //     .
  //   </p>
  // );

  //const terms = locale === 'en' ? termsTextEN : termsTextFR;
  //const terms = termsTextEN;

  const label = { inputProps: { 'aria-label': name } };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* <CheckBox hideBorder type="checkbox" {...field} />
           */}
          <Checkbox
            {...label}
            {...field}
            defaultChecked={false}
            style={{ padding: '0px' }}
            onChange={handleChange}
            sx={{
              [`&, &.${checkboxClasses.checked}`]: {
                color: colors.COZEY_BLUE,
              },
            }}
          />
          <CheckboxLabel style={style}>
            <span>
              I agree to receive notifications on product launches, updates, and
              exclusive content via SMS or email. View{' '}
              <a href="https://www.cozey.com/terms">
                <strong
                  style={{
                    textDecorationLine: 'underline',
                    fontFamily: 'Larsseit Bold',
                  }}
                >
                  Terms of Use
                </strong>
              </a>{' '}
              and{' '}
              <a href="https://www.cozey.com/privacy">
                <strong
                  style={{
                    textDecorationLine: 'underline',
                    fontFamily: 'Larsseit Bold',
                  }}
                >
                  Privacy Policy
                </strong>
              </a>
              .
            </span>
          </CheckboxLabel>
        </div>
      )}
    />
  );
};

export default CheckboxControllerAltered;
