import React from 'react'

type Props = {
  className?: string
}

export const SuperPowerLogo = (props: Props) => (
  <svg viewBox="0 0 198 198" xmlns="http://www.w3.org/2000/svg" className={props.className || 'w-10 h-10'}>
    <g clipPath="url(#power_a)">
      <circle cx={99} cy={99} r={99} fill="url(#power_b)" />
      <path
        d="m29.1 165.119.293-.376c.042.031 4.27 3.152 15.766.322 10.633-2.619 29.814-11.005 60.807-36.09a481.645 481.645 0 0 0 8.159-6.76l.618.616a474.187 474.187 0 0 1-8.168 6.768c-31.145 25.208-50.733 33.352-61.422 35.958-11.667 2.844-15.879-.303-16.052-.438ZM11.298 138.872c-.068-.112-1.61-2.824 2.27-9.476 3.546-6.082 12.54-16.788 35.242-33.258C64.307 84.896 82.89 73.51 101.135 64.075l.448.52C83.35 74.022 64.781 85.4 49.296 96.634c-43.295 31.408-37.805 41.977-37.741 42.083l-.257.155ZM2.385 101.843c-.01-.064-.95-6.54 2.275-16.238 2.97-8.935 10.184-22.527 27.683-36.54 14.354-11.494 35.204-20.563 57.203-24.882 7.637-1.498 15.28-2.397 22.718-2.671 11.72-.432 22.746.678 32.771 3.298l-.101.387c-9.988-2.61-21.227-3.406-32.908-2.976-7.417.274-15.04 1.17-22.655 2.665-21.939 4.307-42.473 13.036-56.778 24.492C15.183 63.319 8.004 76.827 5.048 85.703c-3.202 9.614-2.278 16.016-2.268 16.08l-.395.06ZM65.778 188.771l.175-.36c.085.042 8.67 4.137 22.586 2.721 12.85-1.307 33.003-7.714 56.039-30.813 23.712-23.778 32.725-49.813 36.112-67.467 3.932-20.499 2.18-40.27-4.573-51.601l.344-.205c6.8 11.411 8.571 31.29 4.622 51.881-3.397 17.709-12.128 44.078-35.912 67.927-23.132 23.196-43.7 29.371-56.62 30.679-14.021 1.419-22.688-2.72-22.773-2.762Z"
        fill="#fff"
        fillOpacity={0.32}
      />
      <path
        d="M149.259 133.655a146.603 146.603 0 0 1-5.311-4.553l.572-.664c6.764 6.089 23.641 20.087 34.258 18.565 2.673-.383 4.763-1.766 6.213-4.112l.405.25c-1.527 2.472-3.731 3.93-6.551 4.334-8.606 1.234-21.393-7.134-29.586-13.82ZM110.066 90.327c-10.707-14.772-19.335-29.519-25.644-43.83-9.447-21.436-8.557-32.85-6.358-38.39 1.668-4.202 4.236-5.329 4.345-5.375l.186.44c-.025.01-2.513 1.115-4.1 5.144-2.152 5.459-2.75 16.426 6.617 37.678 6.294 14.281 14.905 28.998 25.593 43.743l-.639.59ZM97.533 167.894c-4.058-3.312-7.89-6.757-11.371-10.015-6.862-6.422-18.268-18.469-28.992-33.894-8.746-12.58-20.06-32.08-25.487-52.062-5.129-18.88-4.233-30.066-2.579-36.125 1.805-6.612 4.804-8.7 4.931-8.786l.225.33c-.03.022-3.025 2.122-4.785 8.616-1.628 6.01-2.5 17.11 2.594 35.86 10.426 38.378 42.78 74.925 54.366 85.769 15.932 14.911 39.237 33.77 57.608 25.457l.165.364c-14.547 6.584-32.068-3.594-46.675-15.514ZM53.327 178.002a81.996 81.996 0 0 1-4.686-4.108l-.238-.226c-7.242-6.908-22.312-21.28-35.28-49.292C.12 96.286 4.843 76.833 4.892 76.64l.29.073c-.049.193-4.742 19.551 8.213 47.537 12.944 27.96 27.986 42.306 35.215 49.2l.238.228c7.014 6.69 22.155 17.79 32.929 19.094l-.037.298c-8.831-1.07-20.56-8.66-28.413-15.068Z"
        fill="#fff"
        fillOpacity={0.32}
      />
      <path
        d="m81.488 193.084.052-.107c.896.429 9.703 2.66 17.764-.876 5.809-2.549 9.86-7.442 12.039-14.543 5.73-18.667-1.49-46.021-19.312-73.172-7.614-11.599-18.328-23.197-29.4-31.834-8.703-6.786-21.649-14.898-33.897-15.01-10.744-.1-16.588 5.148-19.598 9.567-3.262 4.79-3.992 9.663-4 9.712l-.238-.092c.007-.049.863-4.876 4.14-9.688 1.926-2.827 4.34-5.072 7.175-6.671 3.543-2 7.755-2.991 12.522-2.948 5.014.047 10.613 1.47 16.641 4.229 5.572 2.55 11.402 6.187 17.328 10.808 11.082 8.638 21.806 20.253 29.426 31.862 8.023 12.222 14.149 25.012 17.716 36.989 4.165 13.987 4.707 26.194 1.611 36.283-2.19 7.135-6.263 12.053-12.105 14.616-8.1 3.555-16.962 1.306-17.864.875Z"
        fill="#fff"
        fillOpacity={0.32}
      />
      <path
        d="M46.094 108.445c-9.075-7.406-17.173-9.754-21.35-9.515-7.33.42-15.01 2.913-16.4 18.223-.736 8.115 2.256 17.27 4.895 23.521 2.861 6.776 5.937 11.695 5.967 11.744 4.974 6.487 9.925 11.759 14.713 15.666 10.71 8.739 18.87 9.225 23.832 8.093 6.089-1.389 10.006-5.636 11.51-8.85 3.214-6.867 3.496-24.803-9.427-43.7-4.075-5.959-8.698-11.067-13.74-15.182ZM33.967 168.49c-4.795-3.913-9.817-9.108-14.8-15.606-.198-.026-3.277-5.09-6.142-11.875-2.645-6.264-5.711-15.344-4.973-23.483.647-7.122 2.86-12.394 6.408-15.327 3.223-2.666 7.186-3.21 10.278-3.388 4.198-.24 12.33 2.114 21.43 9.542 5.052 4.122 9.683 9.238 13.764 15.207 12.95 18.938 12.662 36.927 9.437 43.817-1.516 3.238-5.461 7.517-11.592 8.916-3.293.751-6.799.643-10.486-.458-4.304-1.285-8.728-3.594-13.324-7.345ZM144.088 183.539l-.104-.344c17.706-8.013 10.706-35.679 7.315-49.088-.127-.506-.25-.99-.365-1.452-1.551-6.189-9.181-23.604-21.289-42.942-10.293-16.439-26.824-39.02-47.12-53.242-9.13-6.398-17.443-10.78-24.707-13.024-5.68-1.755-10.875-2.284-15.111-1.422-6.108 1.242-8.396 4.796-8.419 4.832l-.266-.19c.023-.036 2.357-3.68 8.513-4.934 4.256-.868 9.613-.162 15.313 1.598 7.276 2.248 15.602 6.636 24.744 13.042 20.315 14.232 36.855 36.829 47.154 53.277 12.115 19.348 19.75 36.779 21.303 42.976l.366 1.452c3.398 13.44 10.469 41.407-7.327 49.461ZM184.733 143.535c5-10.279.926-24.517-2.996-34.289-1.853-4.617-19.148-46.132-55.213-81.434-17.652-17.277-28.36-22.804-34.496-24.61-6.638-1.955-9.137.194-9.162.216l-.389-.34c.025-.023 2.558-2.213 9.247-.252 3.916 1.148 8.476 3.474 13.554 6.91 6.344 4.295 13.52 10.348 21.329 17.991 14.542 14.235 27.693 31.029 39.086 49.916 9.671 16.032 14.81 28.209 16.154 31.559 3.93 9.793 8.323 24.316 3.303 34.638l-.417-.305Z"
        fill="#fff"
        fillOpacity={0.32}
      />
      <path
        d="M29.182 165.056c-6.66-7.816 3.816-28.225 28.744-55.992 26.048-29.014 60.662-53.355 75.326-62.171 14.646-8.806 28.415-13.825 35.935-13.097 2.657.257 4.638 1.17 5.887 2.713 1.677 2.07 1.416 4.576 1.414 4.601l-.261.086c.003-.025.4-2.584-1.246-4.614-1.229-1.515-3.182-2.414-5.806-2.668-3.785-.366-9.264.741-15.843 3.203-6.218 2.326-13.14 5.742-20.018 9.877-14.659 8.814-49.262 33.146-75.3 62.149-12.825 14.286-21.79 26.508-26.648 36.325-4.499 9.093-4.97 15.529-1.84 19.201l-.344.387Z"
        fill="#fff"
        fillOpacity={0.32}
      />
      <path
        d="M52.882 181.926c-4.518-3.686-8.372-8.649-11.483-14.43-4.453-8.272-7.136-18.359-7.761-29.17-.684-11.828 1.006-24.307 5.023-37.09C50.226 64.43 75.347 41.809 89.29 31.601c2.54-1.86 5.04-3.553 7.431-5.035 6.358-3.941 18.31-9.057 31.07-10.505l-.025.216c-12.741 1.446-24.635 6.455-30.983 10.39a117.14 117.14 0 0 0-7.422 5.03c-13.933 10.2-39.033 32.8-50.588 69.575-7.703 24.515-6.708 48.633 2.729 66.168 5.79 10.758 14.448 18.251 24.379 21.094l-.088.347c-4.624-1.325-8.999-3.762-12.912-6.955Z"
        fill="#fff"
        fillOpacity={0.32}
      />
      <path
        d="M20.275 133.19c-10.71-8.739-16.847-20.327-18.013-34.943l.24-.242c1.236 15.48 7.926 27.813 19.875 36.669 23.241 17.212 59.877 17.116 86.412 11.287 21.367-4.694 41.711-14.817 57.284-28.505 15.599-13.709 24.203-29.067 24.229-43.244.022-11.529-3.716-19.911-6.857-24.913-3.401-5.417-6.849-8.139-6.883-8.169l.073-.093c.032.024 3.498 2.763 6.911 8.2 3.148 5.014 6.897 13.418 6.875 24.976-.013 7.182-2.223 14.68-6.568 22.284-4.181 7.318-10.137 14.4-17.701 21.048-7.554 6.639-16.291 12.477-25.968 17.35-10.028 5.05-20.582 8.813-31.369 11.182-15.184 3.335-31.525 4.331-46.015 2.802-7.891-.833-15.253-2.391-21.88-4.631-7.1-2.4-13.362-5.589-18.613-9.478a55.105 55.105 0 0 1-2.032-1.58Z"
        fill="#fff"
        fillOpacity={0.32}
      />
      <path
        d="M43.318 151.076A106.752 106.752 0 0 1 32.3 140.703c-14.6-15.85-22.746-34.492-22.94-52.49-.096-8.866 1.007-17.477 3.278-25.592 1.816-6.492 4.38-12.684 7.62-18.404 5.518-9.74 11.161-14.798 11.218-14.848l.079.09c-.057.049-5.688 5.097-11.196 14.821-5.083 8.975-11.097 23.881-10.88 43.931.423 39.157 37.204 73.919 71.293 81.819 34.111 7.905 60.487 3.362 85.522-14.731 25.295-18.281 36.062-51.236 27.429-83.957l.115-.03c4.298 16.288 3.96 32.791-.976 47.722-4.89 14.794-14.054 27.367-26.498 36.361-12.703 9.18-25.56 14.8-39.306 17.18-13.8 2.389-28.95 1.595-46.313-2.43-12.866-2.981-25.971-9.72-37.427-19.069Z"
        fill="#fff"
        fillOpacity={0.32}
      />
      <path
        d="m162.011 171.894-.077-.09c21.324-18.146 33.35-48.696 31.387-79.727-1.006-15.892-5.552-28.733-9.188-36.708-3.941-8.64-7.692-13.587-7.729-13.636l.094-.072c.038.05 3.795 5.003 7.741 13.655 3.642 7.984 8.194 20.841 9.2 36.753.962 15.192-1.388 30.564-6.794 44.454-5.486 14.094-14.004 26.325-24.634 35.371ZM3.316 80.467C11.71 35.073 51.717 1.77 98.445 1.277c6.015-.063 12.096.43 18.075 1.465l-.051.295a99.83 99.83 0 0 0-18.021-1.46c-46.584.49-86.47 33.692-94.837 78.944l-.295-.054ZM80.744 192.902l.076-.392c12.498 2.422 25.375 2.128 37.775-.262l-.177.702c-12.451 2.401-25.126 2.384-37.674-.048Z"
        fill="#fff"
        fillOpacity={0.32}
      />
      <path
        d="M182.48 148.76c6.391-10.097 10.786-21.208 13.064-33.025 2.242-11.635 2.322-23.382.237-34.914a95.006 95.006 0 0 0-6.904-22.173l.091-.04a95.102 95.102 0 0 1 6.912 22.195c2.087 11.545 2.007 23.304-.238 34.952-2.28 11.828-6.68 22.951-13.077 33.058l-.085-.053ZM12.716 140.203a12.24 12.24 0 0 1-1.314-1.272l.252-.236c2.537 2.79 4.664 4.555 19.214 2.614 14.505-1.936 50.358-16.021 82.986-35.402 39.414-23.41 56.858-41.727 63.747-50.56 3.193-4.095 4.282-7.595 3.361-10.2-1.063-3.01-4.666-3.615-4.702-3.623l.151-.266c.036.008 3.64.879 4.726 3.95.936 2.647-.222 6.083-3.442 10.211-6.895 8.841-24.349 27.17-63.78 50.59-32.641 19.388-68.515 33.48-83.032 35.417-11.742 1.567-15.563.902-18.167-1.223ZM84.653 2.4l.137.457c-.05.015-5.045 1.653-9.4 12.661-4.029 10.183-8.31 30.675-5.83 70.47.213 3.424.476 6.98.78 10.566l-.86.147a474.91 474.91 0 0 1-.782-10.578c-2.493-39.99 2.223-60.674 6.294-70.895 4.444-11.156 9.45-12.765 9.66-12.828Z"
        fill="#fff"
        fillOpacity={0.32}
      />
      <path
        d="M116.36 3.104c.131.01 3.234.324 6.407 7.342 2.9 6.414 6.414 19.948 6.678 47.994.18 19.145-1.31 40.887-4.196 61.224l-.684.064c2.885-20.322 4.374-42.05 4.194-61.179-.503-53.485-12.299-55.136-12.422-55.146l.023-.299ZM151.702 17.3c.058.03 5.88 3.018 11.915 11.266 5.559 7.598 12.455 21.354 13.733 43.736 1.048 18.36-3.645 40.607-12.876 61.038-3.204 7.092-6.901 13.841-10.989 20.062-6.44 9.801-13.735 18.143-21.681 24.794l-.257-.307c7.916-6.626 15.079-15.324 21.498-25.093 4.076-6.203 7.763-12.934 10.958-20.007 9.206-20.374 13.992-42.167 12.947-60.464-1.271-22.268-8.119-35.946-13.639-43.5-5.979-8.18-11.732-11.138-11.789-11.167l.18-.357ZM44.122 18.582l.191.352c-.083.045-8.396 4.667-15.307 16.828-6.382 11.23-12.841 31.366-7.367 63.526 5.634 33.104 21.628 55.539 34.052 68.53 14.425 15.084 31.554 25.116 44.701 26.18l-.032.398c-13.24-1.071-30.468-11.149-44.958-26.302-12.463-13.031-28.892-35.429-34.543-68.633-5.497-32.294 1.391-52.635 7.814-63.922 6.97-12.248 15.365-16.911 15.449-16.957Z"
        fill="#fff"
        fillOpacity={0.32}
      />
      <path
        d="M40.655 118.556c2.618-.719 4.962-1.28 6.79-1.689l.21.851c-8.885 1.983-30.073 7.625-34.986 17.158-1.237 2.401-1.32 4.906-.25 7.446l-.439.186c-1.13-2.677-1.04-5.318.265-7.85 3.984-7.729 18.213-13.3 28.41-16.102ZM98.678 111.728c18.244-.165 35.262 1.351 50.582 4.505 22.943 4.723 31.728 12.064 34.969 17.067 2.459 3.794 1.888 6.541 1.862 6.655l-.465-.102c.005-.027.547-2.694-1.816-6.324-3.202-4.916-11.793-11.76-34.54-16.444-15.287-3.147-32.271-4.659-50.481-4.495l-.11-.862ZM42.73 56.56c5.05-1.388 10.08-2.514 14.753-3.463 9.21-1.87 25.638-4.183 44.423-3.982 15.321.163 37.769 2.245 57.198 9.402 18.358 6.762 26.955 13.975 30.935 18.835 4.341 5.303 4.305 8.958 4.301 9.111l-.4-.01c.001-.036.026-3.694-4.247-8.891-3.954-4.81-12.494-11.954-30.727-18.67-37.318-13.745-85.852-8.56-101.404-5.403C36.177 57.83 7.302 65.893 3.43 85.682l-.392-.077C6.103 69.935 24.55 61.555 42.73 56.56ZM60.114 14.677a81.94 81.94 0 0 1 6.063-1.438l.323-.063c9.826-1.899 30.272-5.85 60.616-.183 30.428 5.683 43.543 20.806 43.672 20.958l-.229.194c-.128-.152-13.184-15.195-43.498-20.857-30.288-5.657-50.696-1.713-60.504.183l-.324.062c-9.517 1.838-27.338 7.745-34.644 15.769l-.222-.203c5.99-6.578 18.973-11.737 28.747-14.422Z"
        fill="#fff"
        fillOpacity={0.32}
      />
      <path
        d="m31.5 28.885.058.104c-.868.482-7.792 6.365-9.58 14.985-1.29 6.21.35 12.347 4.873 18.238C38.743 77.7 65.219 87.67 97.674 88.882c13.864.517 29.526-1.492 42.981-5.51 10.574-3.159 24.688-9.007 31.878-18.924 6.308-8.698 5.418-16.5 3.561-21.515-2.012-5.434-5.561-8.854-5.596-8.888l.212-.141c.036.034 3.474 3.528 5.496 8.988 1.188 3.208 1.618 6.476 1.279 9.714-.424 4.046-2.057 8.054-4.855 11.912-2.944 4.06-7.348 7.798-13.091 11.111-5.308 3.063-11.651 5.706-18.85 7.857-13.462 4.025-29.143 6.032-43.02 5.514-14.61-.545-28.583-2.966-40.41-7-13.813-4.711-24.075-11.344-30.503-19.715-4.545-5.92-6.192-12.089-4.895-18.336 1.798-8.661 8.765-14.579 9.64-15.064Z"
        fill="#fff"
        fillOpacity={0.32}
      />
      <path
        d="M120.99 49.094c11.295-3.103 17.901-8.34 20.127-11.883 3.906-6.217 6.326-13.92-5.346-23.927-6.186-5.302-15.38-8.17-22.004-9.642-7.181-1.596-12.972-1.94-13.029-1.944-8.17.294-15.335 1.273-21.294 2.91C66.116 8.27 60.99 14.64 59.037 19.34c-2.396 5.767-1.206 11.421.541 14.51 3.734 6.599 18.187 17.223 41.076 17.644 7.218.133 14.06-.675 20.336-2.399ZM79.086 4.412c5.968-1.64 13.111-2.722 21.295-3.016.136-.146 6.047.28 13.237 1.877 6.638 1.475 15.814 4.239 22.019 9.558 5.429 4.654 8.443 9.512 8.777 14.104.304 4.172-1.549 7.717-3.197 10.339-2.236 3.56-8.868 8.822-20.196 11.935-6.286 1.727-13.14 2.536-20.369 2.403-22.939-.422-37.43-11.083-41.177-17.704-1.76-3.113-2.96-8.808-.547-14.614 1.296-3.119 3.415-5.914 6.45-8.28 3.542-2.764 7.987-5.03 13.708-6.602ZM3 85.432l.34.114C-.39 104.62 26.213 114.95 39.105 119.957l1.395.544c5.943 2.323 24.557 6.199 47.333 7.539 19.362 1.139 47.344.754 70.699-7.544 10.504-3.732 18.893-7.966 24.932-12.585 4.722-3.612 8.164-7.54 9.916-11.491 2.528-5.698.958-9.622.941-9.661l.309-.107c.017.04 1.634 4.054-.912 9.798-1.759 3.97-5.44 7.927-10.178 11.552-6.048 4.627-14.449 8.868-24.969 12.606-23.371 8.307-51.371 8.69-70.745 7.55-22.789-1.34-41.419-5.22-47.369-7.547l-1.395-.543c-12.922-5.02-39.812-15.466-36.06-34.636ZM12.044 141.74c5.48 10.031 19.443 14.962 29.68 17.43 4.837 1.166 48.691 11.132 98.362 2.201 24.31-4.371 35.021-9.895 40.049-13.849 5.439-4.276 5.136-7.558 5.132-7.591l.504-.119c.003.033.32 3.366-5.154 7.68-3.206 2.526-7.743 4.894-13.487 7.041-7.176 2.681-16.268 5.021-27.023 6.955-20.028 3.601-41.336 4.585-63.33 2.923-18.67-1.41-31.572-4.28-35.082-5.125-10.258-2.473-24.639-7.311-30.14-17.384l.49-.162Z"
        fill="#fff"
        fillOpacity={0.32}
      />
      <path
        d="M84.657 2.503c10.23-.898 20.79 19.468 28.971 55.875 8.548 38.042 8.323 80.358 7.009 97.418-1.312 17.038-5.202 31.168-10.153 36.874-1.75 2.016-3.642 3.102-5.623 3.226-2.659.167-4.55-1.498-4.569-1.515l.081-.262c.018.016 1.874 1.823 4.482 1.659 1.947-.124 3.812-1.195 5.539-3.186 2.493-2.872 4.765-7.979 6.572-14.766 1.708-6.416 2.937-14.037 3.553-22.039 1.313-17.054 1.538-59.354-7.007-97.383-4.209-18.73-8.973-33.12-14.158-42.769C94.55 6.7 89.579 2.585 84.774 3.008l-.117-.505Z"
        fill="#fff"
        fillOpacity={0.32}
      />
      <path
        d="M57.173 12.04c5.623-1.545 11.902-1.81 18.416-.995 9.322 1.166 19.097 4.825 28.269 10.581 10.035 6.298 19.225 14.908 27.315 25.59 23.291 30.755 27.167 64.337 27.404 81.618.043 3.146-.025 6.166-.203 8.973-.473 7.465-3.231 20.17-9.447 31.408l-.161-.146c6.206-11.221 9.017-23.817 9.49-31.27.177-2.804.246-5.82.203-8.964-.238-17.266-4.11-50.82-27.381-81.549-15.514-20.485-35.745-33.652-55.504-36.124-12.123-1.516-23.247 1.197-31.32 7.642l-.23-.273c3.758-3 8.28-5.153 13.15-6.49Z"
        fill="#fff"
        fillOpacity={0.32}
      />
      <path
        d="M115.787 13.713c13.329-3.663 26.329-1.948 38.916 5.572l.057.337c-13.33-7.965-27.258-9.66-41.4-5.056C85.864 23.53 64.71 53.44 54.08 78.444c-8.557 20.133-12.098 42.578-9.97 63.203 2.133 20.657 9.662 36.57 21.2 44.807 9.382 6.7 18.38 8.511 24.276 8.851 6.386.368 10.602-.864 10.646-.875l.034.114c-.038.011-4.28 1.249-10.687.879-5.911-.34-14.932-2.156-24.339-8.872-5.845-4.173-10.674-10.319-14.353-18.267-3.54-7.649-5.86-16.607-6.894-26.625-1.033-10.003-.726-20.506.91-31.216 1.697-11.1 4.748-21.881 9.069-32.045 6.081-14.307 14.74-28.2 24.384-39.122 5.252-5.949 10.788-11.045 16.455-15.147 6.071-4.395 12.299-7.65 18.512-9.676a55.126 55.126 0 0 1 2.464-.74Z"
        fill="#fff"
        fillOpacity={0.32}
      />
      <path
        d="M87.857 22.125c4.838-1.33 9.81-2.33 14.839-2.967 21.377-2.71 41.29 1.454 56.071 11.727 7.28 5.06 13.658 10.95 18.955 17.503 4.238 5.243 7.798 10.921 10.581 16.876 4.74 10.142 5.591 17.672 5.599 17.748l-.118.012c-.008-.075-.858-7.59-5.59-17.714-4.368-9.344-13.03-22.884-29.495-34.328-32.155-22.348-81.801-12.52-107.995 10.68-26.212 23.218-37.796 47.345-37.56 78.233.237 31.209 20.853 59.083 52.521 71.011l-.041.111c-15.765-5.938-29.018-15.777-38.325-28.453-9.221-12.559-14.157-27.314-14.274-42.668-.12-15.672 2.752-29.407 8.78-41.988 6.05-12.631 15.477-24.516 28.82-36.334 9.887-8.757 22.974-15.531 37.232-19.448Z"
        fill="#fff"
        fillOpacity={0.32}
      />
      <path
        d="m2.102 106.787.118-.011c2.43 27.895 20.356 55.401 46.782 71.785 13.533 8.391 26.633 12.129 35.24 13.787 9.325 1.796 15.53 1.606 15.59 1.604l.005.119c-.062.002-6.276.193-15.615-1.606-8.616-1.659-21.732-5.402-35.282-13.803-12.938-8.021-24.103-18.844-32.29-31.3-8.306-12.639-13.337-26.67-14.548-40.575ZM168.582 30.448c32.128 33.15 36.082 85.054 9.401 123.418a100.024 100.024 0 0 1-11.669 13.883l-.211-.213a99.747 99.747 0 0 0 11.634-13.841c26.599-38.247 22.658-89.992-9.37-123.038l.215-.209ZM32.081 28.384l.276.29c-9.218 8.78-16.442 19.444-21.68 30.935l-.47-.552c5.26-11.537 12.62-21.857 21.874-30.673Z"
        fill="#fff"
        fillOpacity={0.32}
      />
      <path
        d="M9.091 136.876c4.525 11.059 11.033 21.08 19.343 29.785 8.182 8.571 17.708 15.444 28.315 20.429a95.001 95.001 0 0 0 22.07 7.224l-.02.098a95.091 95.091 0 0 1-22.093-7.232c-10.617-4.99-20.154-11.87-28.345-20.45-8.318-8.714-14.833-18.745-19.362-29.816l.092-.038ZM114.454 3.489a12.26 12.26 0 0 1 1.797-.335l.047.342c-3.744.451-6.416 1.162-13.266 14.144-6.83 12.942-16.13 50.323-19.245 88.146-3.765 45.688 1.052 70.518 4.258 81.252 1.486 4.975 3.707 7.891 6.364 8.65 3.07.878 5.65-1.708 5.677-1.732l.13.277c-.028.025-2.825 2.457-5.959 1.561-2.699-.77-4.827-3.705-6.326-8.722-3.209-10.743-8.029-35.589-4.263-81.296 3.118-37.838 12.424-75.238 19.259-88.192 5.529-10.477 8.285-13.204 11.527-14.095ZM113.222 150.535a1.525 1.525 0 1 0 3.024.398 1.525 1.525 0 0 0-3.024-.398ZM70.396 83.494a1.743 1.743 0 1 1-3.457-.454 1.743 1.743 0 0 1 3.457.454ZM15.806 107.275a1.083 1.083 0 1 1-2.146-.283 1.083 1.083 0 0 1 2.146.283ZM146.365 25.313a1.377 1.377 0 1 1-2.73-.358 1.377 1.377 0 0 1 2.73.358ZM86.057 3.024a1.278 1.278 0 1 1-2.534-.333 1.278 1.278 0 0 1 2.534.333ZM177.235 41.47a1.276 1.276 0 1 1-2.533-.333 1.277 1.277 0 1 1 2.533.333Z"
        fill="#fff"
        fillOpacity={0.32}
      />
      <path
        d="M67.133 189.267a1.28 1.28 0 0 1-1.433 1.101 1.28 1.28 0 0 1 .333-2.535c.7.092 1.192.735 1.1 1.434ZM156.233 17.3a1.277 1.277 0 1 1-2.532-.332 1.277 1.277 0 0 1 2.532.332ZM70.07 165.709a.673.673 0 1 1-1.335-.174.673.673 0 0 1 1.334.174ZM9.556 71.82a.674.674 0 1 1-1.336-.175.674.674 0 0 1 1.336.175ZM129.668 186.488a.673.673 0 1 1-1.335-.174.673.673 0 0 1 1.335.174ZM79.133 194.467a.635.635 0 1 1-1.26-.166.635.635 0 0 1 1.26.166ZM66.696 149.083a.635.635 0 1 1-1.26-.165.635.635 0 0 1 1.26.165ZM41.147 145.498a.753.753 0 1 1-1.494-.195.753.753 0 0 1 1.494.195ZM53.267 155.934a.961.961 0 1 1-1.905-.252.961.961 0 0 1 1.905.252ZM26.387 161.243a.88.88 0 1 1-1.744-.23.88.88 0 0 1 1.744.23ZM126.524 106.947a1.134 1.134 0 1 1-2.248-.295 1.134 1.134 0 0 1 2.248.295ZM188.25 134.867a1.133 1.133 0 1 1-2.248-.296 1.133 1.133 0 1 1 2.248.296ZM109.938 166.891a1.133 1.133 0 1 1-2.248-.293 1.133 1.133 0 0 1 2.248.293ZM120.163 192.585a1.2 1.2 0 1 1-2.379-.313 1.2 1.2 0 0 1 2.379.313ZM180.273 40.29a.679.679 0 1 1-1.346-.179.679.679 0 0 1 1.346.178ZM12.6 140.333a.672.672 0 1 1-1.333-.175.672.672 0 0 1 1.333.175ZM28.695 123.744a1.104 1.104 0 1 1-2.189-.288 1.104 1.104 0 0 1 2.189.288ZM112.575 90.86a1.991 1.991 0 1 1-3.949-.518 1.991 1.991 0 0 1 3.949.518ZM102.647 64.274a1.526 1.526 0 1 1-3.025-.399 1.526 1.526 0 0 1 3.025.399ZM83.667 68.734a.539.539 0 1 1-1.068-.14.539.539 0 0 1 1.068.14ZM5.134 124.022a.673.673 0 1 1-1.334-.176.673.673 0 0 1 1.334.176ZM108.804 110.964a.744.744 0 1 1-1.475-.196.744.744 0 0 1 1.475.196ZM152.439 17.398a.744.744 0 1 1-1.475-.195.744.744 0 0 1 1.475.195ZM28.076 37.09a.56.56 0 1 1 .134-1.113.56.56 0 0 1-.134 1.114ZM161.499 76.442a.847.847 0 1 1 .202-1.683.847.847 0 0 1-.202 1.683ZM151.299 125.575a.847.847 0 1 1 .202-1.682.847.847 0 0 1-.202 1.682ZM178.6 95.4a.848.848 0 1 1 .204-1.683.848.848 0 0 1-.204 1.683ZM185.295 143.982a.846.846 0 1 1 .2-1.681.846.846 0 0 1-.2 1.681ZM149.165 99.974a.847.847 0 1 1 .204-1.681.847.847 0 0 1-.204 1.681ZM108.591 64.674a.848.848 0 1 1 .204-1.683.848.848 0 0 1-.204 1.683ZM78.058 150.54a.848.848 0 1 1 .203-1.684.848.848 0 0 1-.203 1.684ZM83.6 74.8a.847.847 0 1 1 .202-1.682.847.847 0 0 1-.202 1.683ZM29.206 99.543a.847.847 0 1 1 .203-1.682.847.847 0 0 1-.203 1.682ZM168.376 31.09a.56.56 0 1 1 .134-1.113.56.56 0 0 1-.134 1.114ZM44.499 76.842a.847.847 0 1 1 .202-1.682.847.847 0 0 1-.202 1.682ZM56.099 185.142a.847.847 0 1 1 .203-1.683.847.847 0 0 1-.203 1.683ZM101.533 20.733a.847.847 0 1 1 .204-1.681.847.847 0 0 1-.204 1.681ZM45.397 45.683A.847.847 0 1 1 45.6 44a.847.847 0 0 1-.203 1.682ZM42.655 129.006a1.215 1.215 0 1 1 .29-2.412 1.215 1.215 0 0 1-.29 2.412ZM131.215 179.223a1.162 1.162 0 1 1 .238-2.311 1.162 1.162 0 0 1-.238 2.311ZM86.402 194.435a1.162 1.162 0 1 1 .238-2.313 1.162 1.162 0 0 1-.238 2.313ZM122.363 6.358a1.586 1.586 0 1 1 .323-3.156 1.586 1.586 0 0 1-.323 3.156ZM182.726 64.305a1.162 1.162 0 1 1 .237-2.313 1.162 1.162 0 0 1-.237 2.313ZM24.938 35.953a1.631 1.631 0 1 1 .39-3.239 1.631 1.631 0 0 1-.39 3.24ZM193.191 79.023a1.086 1.086 0 1 1 .26-2.156 1.086 1.086 0 0 1-.26 2.156ZM194.882 84.54a.569.569 0 1 1 .135-1.129.569.569 0 0 1-.135 1.13ZM68.591 16.29a.569.569 0 1 1 .135-1.13.569.569 0 0 1-.135 1.13ZM134.867 137.801a.57.57 0 1 1 .136-1.13.57.57 0 0 1-.136 1.13ZM144.732 116.565a.569.569 0 1 1 .135-1.129.569.569 0 0 1-.135 1.129ZM142.4 10.4a.569.569 0 1 1 .135-1.129.569.569 0 0 1-.135 1.13ZM151.133 86.6a.57.57 0 1 1 .137-1.13.57.57 0 0 1-.137 1.13ZM142.867 56.734a.568.568 0 1 1 .136-1.13.569.569 0 1 1-.136 1.13ZM.264 96.73a.569.569 0 1 1 .135-1.13.569.569 0 0 1-.135 1.13ZM74.376 173.836a1.847 1.847 0 1 1 .442-3.668 1.847 1.847 0 0 1-.442 3.668ZM169.8 137.601a1.035 1.035 0 1 1 .25-2.056 1.035 1.035 0 0 1-.25 2.056ZM70.55 191.07a1.034 1.034 0 1 1 .246-2.053 1.034 1.034 0 0 1-.247 2.053ZM99.703 195.028a1.085 1.085 0 1 1 .26-2.155 1.085 1.085 0 0 1-.26 2.155ZM165.973 168.613a1.085 1.085 0 1 1 .261-2.155 1.085 1.085 0 0 1-.261 2.155ZM44.183 20.01a1.085 1.085 0 1 1 .26-2.154 1.085 1.085 0 0 1-.26 2.154ZM57.925 128.738a1.085 1.085 0 1 1 .259-2.154 1.085 1.085 0 0 1-.26 2.154ZM51.804 90.611a1.085 1.085 0 1 1 .26-2.154 1.085 1.085 0 0 1-.26 2.154ZM69.404 114.344a1.085 1.085 0 1 1 .26-2.155 1.085 1.085 0 0 1-.26 2.155ZM10.6 60.068a1.085 1.085 0 1 1 .259-2.155 1.085 1.085 0 0 1-.259 2.155ZM186.25 62.093a.699.699 0 1 1 .167-1.387.699.699 0 0 1-.167 1.387ZM85.45 156.628a.698.698 0 1 1 .167-1.387.698.698 0 0 1-.167 1.387ZM187.625 68.877a.79.79 0 1 1 .188-1.57.79.79 0 0 1-.188 1.57ZM51.398 65.676a1.253 1.253 0 1 1 .3-2.489 1.253 1.253 0 0 1-.3 2.489ZM33.133 142.467a1.254 1.254 0 1 1 .3-2.49 1.254 1.254 0 0 1-.3 2.49ZM46.9 118.691a1.254 1.254 0 1 1 .3-2.49 1.254 1.254 0 0 1-.3 2.49ZM116.358 3.96a.93.93 0 1 1 .223-1.845.93.93 0 0 1-.223 1.845ZM87.48 12.665a.93.93 0 1 1 .221-1.845.93.93 0 0 1-.222 1.845ZM144.425 130.518a1.784 1.784 0 1 1 .427-3.543 1.784 1.784 0 0 1-.427 3.543ZM98.426 114.275a2.292 2.292 0 1 1 .547-4.551 2.292 2.292 0 0 1-.547 4.551ZM37.098 57.25a1.773 1.773 0 1 1 .424-3.521 1.773 1.773 0 0 1-.424 3.52ZM12.002 145.047a1.659 1.659 0 1 1 .398-3.294 1.659 1.659 0 0 1-.398 3.294ZM93.47 173.932a.536.536 0 1 1 .126-1.063.536.536 0 0 1-.127 1.063ZM121.536 34.932a.536.536 0 1 1 .128-1.064.536.536 0 0 1-.128 1.064ZM103.272 3.932a.536.536 0 1 1 .13-1.065.536.536 0 0 1-.13 1.065ZM137.204 127.202a.536.536 0 1 1 .128-1.064.536.536 0 0 1-.128 1.064ZM107.005 8.465a.536.536 0 1 1 .13-1.065.536.536 0 0 1-.13 1.065ZM182.501 149.346a.537.537 0 0 1 .128-1.065.536.536 0 0 1-.128 1.065ZM100.136 129.132a.535.535 0 1 1 .127-1.063.535.535 0 0 1-.127 1.063ZM190.936 51.732a.535.535 0 1 1 .127-1.063.535.535 0 0 1-.127 1.063ZM14.537 116.135a.537.537 0 0 1 .128-1.065.537.537 0 0 1-.128 1.065ZM181.069 115.399a.536.536 0 1 1 .128-1.064.536.536 0 0 1-.128 1.064ZM174.001 78.93a.537.537 0 1 1 .13-1.067.537.537 0 0 1-.13 1.067ZM85 95a.536.536 0 1 1 .128-1.063A.536.536 0 0 1 85 95ZM173.082 92.938a1.55 1.55 0 1 1 .371-3.077 1.55 1.55 0 0 1-.371 3.077ZM3.175 81.842a1.549 1.549 0 1 1 .37-3.076 1.549 1.549 0 0 1-.37 3.076ZM69.944 98.086a1.549 1.549 0 1 1 .37-3.075 1.549 1.549 0 0 1-.37 3.075ZM114.558 123.969a1.548 1.548 0 1 1 .369-3.073 1.548 1.548 0 0 1-.369 3.073ZM194.444 88.19a1.549 1.549 0 1 1 .371-3.076 1.549 1.549 0 0 1-.371 3.076ZM133.144 153.553a1.55 1.55 0 1 1 .373-3.076 1.55 1.55 0 0 1-.373 3.076ZM188.415 77.738a1.55 1.55 0 1 1 .371-3.077 1.55 1.55 0 0 1-.371 3.077ZM2.337 98.34a1.076 1.076 0 1 1 .257-2.137 1.076 1.076 0 0 1-.257 2.137ZM124.663 121.602a1.549 1.549 0 1 1 .371-3.075 1.549 1.549 0 0 1-.371 3.075ZM127.202 53.145a.776.776 0 1 1 .185-1.54.776.776 0 0 1-.185 1.54ZM94.269 43.28a.778.778 0 1 1 .187-1.545.778.778 0 0 1-.187 1.544ZM65.736 13.679a.777.777 0 1 1 .185-1.543.777.777 0 0 1-.185 1.543ZM33.943 27.783a.777.777 0 1 1 .186-1.543.777.777 0 0 1-.186 1.543ZM2.22 102.02a.777.777 0 1 1 .186-1.543.777.777 0 0 1-.185 1.543ZM127.689 16.926a.652.652 0 1 1 .155-1.296.652.652 0 0 1-.155 1.296ZM197.189 114.582a.653.653 0 1 1 .156-1.296.653.653 0 0 1-.156 1.296ZM130.407 93.571a.652.652 0 1 1 .155-1.295.652.652 0 0 1-.155 1.295ZM44.733 101.667a.527.527 0 1 1 .125-1.047.527.527 0 0 1-.125 1.047ZM33.913 103.696a.796.796 0 1 1 .19-1.582.796.796 0 0 1-.19 1.582ZM8.911 137.642a.733.733 0 1 0 .176-1.456.733.733 0 0 0-.176 1.456ZM193.6 115.401a.733.733 0 1 0 .176-1.456.733.733 0 0 0-.176 1.456ZM39.8 26.4a.476.476 0 1 1 .114-.944.476.476 0 0 1-.114.944ZM130.343 7.073a.476.476 0 1 1 .116-.946.476.476 0 0 1-.116.946ZM85.004 43.283a.476.476 0 1 1 .115-.946.476.476 0 0 1-.115.946ZM89.004 9.416a.476.476 0 1 1 .115-.946.476.476 0 0 1-.115.946ZM2.47 87.382a.476.476 0 1 1 .113-.944.476.476 0 0 1-.113.944Z"
        fill="#fff"
        fillOpacity={0.32}
      />
      <path
        d="M131.071 6.616a.476.476 0 1 1 .115-.945.476.476 0 0 1-.115.945ZM148.652 170.013a.474.474 0 1 1 .114-.944.475.475 0 1 1-.114.944ZM161.954 172.366a.475.475 0 1 1 .113-.943.475.475 0 0 1-.113.943ZM139.015 140.196a.476.476 0 1 1 .115-.945.476.476 0 0 1-.115.945ZM175.343 34.273a.476.476 0 1 1 .116-.946.476.476 0 0 1-.116.946ZM197.015 106.196a.476.476 0 1 1 .115-.945.476.476 0 0 1-.115.945ZM193.781 71.784a.476.476 0 1 1 .115-.944.476.476 0 0 1-.115.944ZM74.01 34.273a.475.475 0 1 1 .113-.944.475.475 0 0 1-.113.944ZM37.6 183.001a.476.476 0 1 1 .116-.946.476.476 0 0 1-.116.946ZM188.912 59.079a.475.475 0 1 1 .113-.943.475.475 0 0 1-.113.943ZM57.61 101.072a.474.474 0 1 1 .114-.944.476.476 0 1 1-.114.944ZM23.087 37.145a.476.476 0 1 1 .113-.945.476.476 0 0 1-.113.945ZM86.143 181.873a.476.476 0 1 1 .116-.946.476.476 0 0 1-.116.946ZM2.164 107.249a.476.476 0 1 1 .115-.946.476.476 0 0 1-.115.946ZM61.286 24.878a.476.476 0 1 1 .114-.945.476.476 0 0 1-.114.945ZM131.415 27.73a.476.476 0 1 1 .115-.945.476.476 0 0 1-.115.944ZM134.749 97.262a.476.476 0 1 1 .114-.946.476.476 0 0 1-.114.946ZM70.543 2.806a.476.476 0 1 1 .113-.944.476.476 0 0 1-.113.944Z"
        fill="#fff"
        fillOpacity={0.32}
      />
      <circle cx={99} cy={99} r={75} fill="url(#power_c)" />
      <path
        d="M135.75 81.875v21.634c0 8.949-4.564 16.837-11.5 21.491v23h-46v-23l-9.558-6.949A18.773 18.773 0 0 1 61 102.934V90.5c0-2.62 1.19-5.1 3.073-6.735l5.552-4.316v8.176a2.875 2.875 0 1 0 5.75 0v-23A8.625 8.625 0 0 1 84 56c4.56 0 8.258 3.552 8.566 8.037 1.532-1.407 3.563-2.287 5.809-2.287A8.625 8.625 0 0 1 107 70.375v.994a8.616 8.616 0 0 1 7.188-3.869c4.217 0 7.715 3.031 8.465 7.033 1.309-.798 2.837-1.283 4.472-1.283a8.627 8.627 0 0 1 8.625 8.625Z"
        fill="#fff"
        opacity={0.75}
      />
    </g>
    <defs>
      <radialGradient id="power_b" cx={0} cy={0} r={1} gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 99 -99 0 99 99)">
        <stop stopColor="#F56565" />
        <stop offset={1} stopColor="#ED3258" />
      </radialGradient>
      <radialGradient id="power_c" cx={0} cy={0} r={1} gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 75 -75 0 99 99)">
        <stop stopColor="#FBC531" />
        <stop offset={1} stopColor="#ED3258" />
      </radialGradient>
      <clipPath id="power_a">
        <path fill="#fff" d="M0 0h198v198H0z" />
      </clipPath>
    </defs>
  </svg>
)
