import httpService from "../../service/HttpService";
import ApiConfig from "../../service/ApiConfig";
import { IUser, IUserForm } from "./User.type";

export const getUserListApi = async () => {
  return await ApiConfig.get<IUser[]>(httpService.user);
};

export const createUserApi = async (data: IUserForm) => {
  return await ApiConfig.post<IUser>(httpService.user, data);
};

export const deleteUserApi = async (id: number) => {
  const url = `${httpService.user}/${id}`;
  return await ApiConfig.delete(url);
};

export const updateUserApi = async (id: number, data: IUserForm) => {
  const url = `${httpService.user}/${id}`;
  return await ApiConfig.put(url, data);
};