import React from "react";
import { Link } from "react-router-dom";
import { Card } from "flowbite-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Cards({ heading, description, RedirectText, caption, faIcon ,redirect}) {
  return (
    <>
      <div class="w-92 p-6 mb-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-900">
        <FontAwesomeIcon icon={faIcon} size="2x" />
        <h3>{caption}</h3>
        <Link href={description}>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white justify-center m-auto ">
            {heading}
          </h5>
        </Link>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <Link to={redirect} target="_blank" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">{RedirectText}</Link>
      </div>
    </>
  );
}

export default Cards;