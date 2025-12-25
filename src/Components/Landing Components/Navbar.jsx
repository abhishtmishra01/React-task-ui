import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <div className="relative">
        <input
          className="p-2 placeholder:text-white placeholder:text-xs w-md ps-11 border border-gray-700 rounded-xl"
          type="text"
          placeholder="Search for films, directories, or actors..."
        />
        <i class="ri-search-line absolute top-1.5 left-2.5 text-xl"></i>
      </div>
      <div className="flex items-center gap-3">
        <i class="ri-notification-3-fill text-xl"></i>
        <img
          className="w-8 rounded-full h-8 object-cover"
          src="https://imgs.search.brave.com/KtPQczG5lhtavqprXTZrM-6JB55hINUsoWQ_iVkVf6I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI4/NjIyNTIxMS9waG90/by9wb3J0cmFpdC1v/Zi1hLWhhbmRzb21l/LXlvdW5nLW1hbi1w/b3NpbmctYXQtaG9t/ZS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9MFFXQ0RMdDNu/clV4cElHSnhXbzdI/LTRhMmQ1Y2dNeEFQ/RWRpLVZjRFhnND0"
          alt=""
        />
      </div>
    </nav>
  );
};

export default Navbar;
