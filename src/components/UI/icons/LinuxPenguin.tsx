import { IconProps } from '@chakra-ui/react';
import { createIcon } from '@chakra-ui/icons';

const [w, h] = [27, 36];

const Icon = createIcon({
  displayName: 'LinuxPenguin',
  viewBox: `0 0 ${w} ${h}`,
  path: (
   <svg width={w} height={h} fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.305 28.28c-.82-.65-.501-2.087-1.353-2.796.825-4.907-1.488-9.233-4.246-12.005-2.314-2.326-1.568-4.59-1.568-6.548C19.138 3.801 17.823.5 13.84.5 9.583.5 8.416 3.97 8.374 5.951c-.101 4.757.984 5.994-1.865 9.456-3.352 4.073-3.846 8.136-3.09 10.291-.353.403-.83.85-1.723 1.218-2.465 1.05-.658 2.808-1.34 4.054a2.25 2.25 0 0 0-.286 1.08c0 1.093.89 2.04 2.505 1.898 2.18-.19 4.192 1.32 5.493 1.32 1.15 0 2.092-.639 2.531-1.518 2.055-.494 4.592-.432 6.645.086.369 1.008 1.369 1.664 2.48 1.664 2.434 0 2.903-2.697 5.695-3.61 1.005-.328 1.511-1.281 1.511-2.17 0-.568-.207-1.11-.625-1.44zm-13.65-15.262c-.476 0-.87-.376-1.492-.828-.788-.572-1.59-.901-1.58-1.502 0-.413.566-.54 1.297-.993.785-.486 1.09-.979 1.863-.979.791 0 1.03.391 2.105.845 1.056.447 1.792.622 1.792 1.127 0 .518-1.106.888-1.728 1.266-.915.551-1.385 1.064-2.257 1.064zm2.485-7.605c1.316.206 1.464 2.466.834 3.579l-.53-.212c.275-.791.27-2.095-.649-2.178-.583-.053-.96.7-1.04 1.344a2.564 2.564 0 0 0-.78-.185c.092-1.346.982-2.533 2.165-2.348zm-5.078.483c1.009-.245 1.604.901 1.609 2.093l-.463.277c-.063-.5-.291-1.309-.864-1.136-.613.186-.513 1.579-.172 1.865l-.456.248c-.627-1.031-.626-3.11.346-3.347zM6.906 33.959c-2.93-1.303-3.925-1.007-4.484-1.007-1.16 0-1.539-.844-1.103-1.643.37-.678.255-1.389.164-1.959-.14-.873-.166-1.158.713-1.534 1.216-.505 1.757-1.153 2.16-1.64 1.13-1.366 2.272.784 3.208 2.699.607 1.24 1.803 1.87 2.171 3.245.339 1.27-1.06 2.626-2.83 1.839zm10.426-2.733c-2.065.981-4.696 1.432-6.664.436-.291-.821-.757-1.352-1.258-1.886.804-.207 1.401-1.187.686-2.171-.762-1.052-2.32-1.785-3.895-2.975-1.472-1.113-1.938-3.856.068-6.922-.978 2.716-.406 5.218.085 5.934.101-1.44.218-3.847 2.232-6.73 1.016-1.455 1.031-3.377 1.054-4.58l.925.62c.68.49 1.25 1.032 2.068 1.032 1.209 0 1.877-.68 2.809-1.244.364-.219.914-.44 1.377-.748.776 3.61 3.99 7.953 4.17 10.427.748-1.505-.211-5.125-.211-5.125 1.256 1.874 1.356 3.436 1.411 5.352.88.352 1.823 1.267 1.909 2.474l-.366-.041c-.188-1.34-3.89-3.31-4.223-.786-1.775.264-1.13 3.013-1.487 4.795-.165.815-.469 1.46-.69 2.138zm7.232-.06c-1.47.554-2.463 1.73-3.145 2.461-1.313 1.41-3.05.734-3.235-.584-.195-1.409.537-2.178.854-3.754.288-1.44-.035-3.655.643-3.89.44 2.556 3.083 1.48 3.686.784.98 0 1.062.323 1.282 1.22.137.562.326 1.034.862 1.59.624.652.433 1.652-.947 2.173zM12.626 12.199c-.972 0-1.699-.632-2.29-1.122-.302-.25.075-.71.378-.46.577.48 1.16.985 1.912.985.905 0 1.704-.757 2.786-1.174.368-.141.579.416.213.557-1.05.404-1.894 1.214-3 1.214z" fill="currentColor"/></svg>
  )
});

export const LinuxPenguin: React.FC<IconProps> = props => (
  <Icon h={h} w={w} color='bg' {...props} />
);
