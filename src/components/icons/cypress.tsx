import type { SVGProps } from 'react'

interface CypressIconProps extends SVGProps<SVGSVGElement> {}

export function CypressIcon(props: CypressIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      width="24"
      height="24"
      {...props}
    >
      <title>Cypress</title>
      <path d="M11.998.02c-.864 0-1.682.11-2.144.193v.002A11.933 11.933 0 000 12.002c0 1.126.157 2.233.465 3.303.038.145.091.299.137.447 1.607 4.865 6.224 8.226 11.392 8.228.065 0 .252 0 .502-.011a2.22 2.22 0 001.951-1.37l.474-1.154 5.505-13.402H18.62l-2.316 5.871-2.334-5.871h-1.909l3.274 8.012-2.436 5.91a.54.54 0 01-.472.336c-.144.005-.285.01-.432.01-4.585 0-8.667-3.07-9.928-7.465a10.306 10.306 0 01-.398-2.844 10.27 10.27 0 018.603-10.164c.222-.037.889-.145 1.725-.145 4.417 0 8.269 2.732 9.73 6.848.056.144.098.293.147.44.299.974.453 1.988.453 3.021 0 4.57-2.941 8.533-7.316 9.861l.486 1.6c5.085-1.546 8.5-6.152 8.502-11.46 0-1.548-.298-2.87-.65-3.892l-.131-.363h-.002C21.457 3.095 17.044.019 11.998.019zM8.434 7.89c-1.2 0-2.175.386-2.98 1.176-.802.786-1.206 1.774-1.206 2.936 0 1.154.407 2.137 1.205 2.92.806.79 1.78 1.174 2.98 1.174 1.706 0 3.156-.955 3.788-2.489l.033-.082-1.629-.554c-.168.456-.755 1.488-2.191 1.488-.675 0-1.244-.234-1.694-.7-.457-.47-.687-1.062-.687-1.757 0-.7.225-1.28.687-1.774.452-.464 1.02-.7 1.694-.7 1.438 0 2.023 1.08 2.193 1.488l1.627-.553-.033-.084c-.63-1.536-2.082-2.488-3.787-2.488z" />
    </svg>
  )
}
