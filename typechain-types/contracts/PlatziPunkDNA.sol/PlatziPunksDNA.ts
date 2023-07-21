/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface PlatziPunksDNAInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "_getAccesoriesType"
      | "_getClotheColor"
      | "getClotheType"
      | "getEyeBrowType"
      | "getEyeType"
      | "getFacialHairColor"
      | "getFacialHairType"
      | "getGraphicType"
      | "getHairColor"
      | "getHatColor"
      | "getMouthType"
      | "getSkinColor"
      | "getTopType"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "_getAccesoriesType",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "_getClotheColor",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getClotheType",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getEyeBrowType",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getEyeType",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getFacialHairColor",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getFacialHairType",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getGraphicType",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getHairColor",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getHatColor",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getMouthType",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSkinColor",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTopType",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "_getAccesoriesType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_getClotheColor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getClotheType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEyeBrowType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getEyeType", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getFacialHairColor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFacialHairType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGraphicType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getHairColor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getHatColor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMouthType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSkinColor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getTopType", data: BytesLike): Result;
}

export interface PlatziPunksDNA extends BaseContract {
  connect(runner?: ContractRunner | null): PlatziPunksDNA;
  waitForDeployment(): Promise<this>;

  interface: PlatziPunksDNAInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  _getAccesoriesType: TypedContractMethod<
    [_dna: BigNumberish],
    [string],
    "view"
  >;

  _getClotheColor: TypedContractMethod<[_dna: BigNumberish], [string], "view">;

  getClotheType: TypedContractMethod<[_dna: BigNumberish], [string], "view">;

  getEyeBrowType: TypedContractMethod<[_dna: BigNumberish], [string], "view">;

  getEyeType: TypedContractMethod<[_dna: BigNumberish], [string], "view">;

  getFacialHairColor: TypedContractMethod<
    [_dna: BigNumberish],
    [string],
    "view"
  >;

  getFacialHairType: TypedContractMethod<
    [_dna: BigNumberish],
    [string],
    "view"
  >;

  getGraphicType: TypedContractMethod<[_dna: BigNumberish], [string], "view">;

  getHairColor: TypedContractMethod<[_dna: BigNumberish], [string], "view">;

  getHatColor: TypedContractMethod<[_dna: BigNumberish], [string], "view">;

  getMouthType: TypedContractMethod<[_dna: BigNumberish], [string], "view">;

  getSkinColor: TypedContractMethod<[_dna: BigNumberish], [string], "view">;

  getTopType: TypedContractMethod<[_dna: BigNumberish], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "_getAccesoriesType"
  ): TypedContractMethod<[_dna: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "_getClotheColor"
  ): TypedContractMethod<[_dna: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "getClotheType"
  ): TypedContractMethod<[_dna: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "getEyeBrowType"
  ): TypedContractMethod<[_dna: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "getEyeType"
  ): TypedContractMethod<[_dna: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "getFacialHairColor"
  ): TypedContractMethod<[_dna: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "getFacialHairType"
  ): TypedContractMethod<[_dna: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "getGraphicType"
  ): TypedContractMethod<[_dna: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "getHairColor"
  ): TypedContractMethod<[_dna: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "getHatColor"
  ): TypedContractMethod<[_dna: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "getMouthType"
  ): TypedContractMethod<[_dna: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "getSkinColor"
  ): TypedContractMethod<[_dna: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "getTopType"
  ): TypedContractMethod<[_dna: BigNumberish], [string], "view">;

  filters: {};
}