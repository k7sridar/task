const createMember = (id, fullname, address, email, jd) => {
  return {
    type: "ADD_MEMBER",
    payload: {
      id,
      fullname,
      address,
      email,
      jd,
    },
  };
};

const deleteMember = (id) => {
  return {
    type: "REMOVE_MEMBER",
    payload: {
      id,
    },
  };
};

const member = (listofmember = [], action) => {
  if (action.type === "ADD_MEMBER") {
    return [...listofmember, action.payload.name];
  } else if (action.type === "REMOVE_MEMBER") {
    return listofmember.filter((id) => id !== action.payload.id);
  }
  return listofmember;
};
